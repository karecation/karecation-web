/**
 * Karecation reservation webhook (Google Apps Script Web App).
 *
 * Saves each booking submission as ONE row whose columns always follow the
 * fixed SHEET_HEADERS order below — values are matched BY FIELD NAME, never by
 * request-parameter order, so reordering the frontend payload cannot shift a
 * value into the wrong column.
 *
 * Final canonical columns (A..Z, exactly 26):
 *   Timestamp, Full Name, Email, Nationality, Preferred Date,
 *   Program 1 .. Program 17, Additional Request,
 *   Discount Code, Discount Amount, Value
 */

var SPREADSHEET_ID = '1Z_u05kBS1r37kRkJ8W04tOoJAXi-OFZzD9T8JIm3seg'; // between /d/ and /edit in the sheet URL
var SHEET_NAME = '시트1'; // existing reservations tab (default Korean sheet name)

var SHEET_HEADERS = Object.freeze([
  'Timestamp',
  'Full Name',
  'Email',
  'Nationality',
  'Preferred Date',

  'Program 1',
  'Program 2',
  'Program 3',
  'Program 4',
  'Program 5',
  'Program 6',
  'Program 7',
  'Program 8',
  'Program 9',
  'Program 10',
  'Program 11',
  'Program 12',
  'Program 13',
  'Program 14',
  'Program 15',
  'Program 16',
  'Program 17',

  'Additional Request',
  'Discount Code',
  'Discount Amount',
  'Value'
]);

// Guard: this script assumes exactly 26 canonical columns.
if (SHEET_HEADERS.length !== 26) {
  throw new Error('SHEET_HEADERS must contain exactly 26 columns, found ' + SHEET_HEADERS.length);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    lock.waitLock(30000); // serialize concurrent submissions so rows never collide
    locked = true;
  } catch (lockErr) {
    locked = false; // fall through and still try to save rather than drop the lead
  }

  try {
    var ss = SPREADSHEET_ID
      ? SpreadsheetApp.openById(SPREADSHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();

    if (!ss) {
      throw new Error('Spreadsheet not found. Set SPREADSHEET_ID.');
    }

    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Normalise the sheet to the 26 canonical columns (backs up existing data
    // once before any destructive change). Header row only — data rows kept.
    ensureSheetStructure_(ss, sheet);

    var data = getPayload_(e);
    var row = buildRow_(data);

    sheet
      .getRange(sheet.getLastRow() + 1, 1, 1, SHEET_HEADERS.length)
      .setValues([row]);

    return json_({ ok: true, success: true, via: 'doPost' });
  } catch (err) {
    return json_({
      ok: false,
      success: false,
      error: String(err && err.message ? err.message : err)
    });
  } finally {
    if (locked) {
      try { lock.releaseLock(); } catch (releaseErr) {}
    }
  }
}

function doGet(e) {
  return json_({ ok: true, message: 'webhook live' });
}

/**
 * One-time manual setup helper. Run this once from the Apps Script editor
 * (pick setupSheet in the function dropdown, click Run) to immediately
 * normalise the tab to the 26 canonical columns A..Z and create the one-time
 * backup, instead of waiting for the first booking POST. Idempotent.
 */
function setupSheet() {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error('Spreadsheet not found. Set SPREADSHEET_ID.');
  }
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  ensureSheetStructure_(ss, sheet);
  return 'Sheet "' + sheet.getName() + '" normalised to ' + SHEET_HEADERS.length + ' columns (A..Z).';
}

/**
 * Build a single row in SHEET_HEADERS order by reading each named field.
 * Never depends on parameter order or Object.values().
 */
function buildRow_(data) {
  return SHEET_HEADERS.map(function (header) {
    var hasValue = Object.prototype.hasOwnProperty.call(data, header);
    var rawValue = hasValue ? data[header] : '';

    // Discount Amount and Value must be stored as plain numbers (strip $, commas, spaces).
    if (header === 'Discount Amount' || header === 'Value') {
      var normalized = String(rawValue == null ? '' : rawValue).replace(/[$,\s]/g, '');
      var numericValue = Number(normalized);
      return isFinite(numericValue) ? numericValue : 0;
    }

    // Timestamp correction: keep the client ISO timestamp, else stamp server-side.
    if (header === 'Timestamp') {
      var ts = String(rawValue == null ? '' : rawValue).trim();
      return ts !== '' ? ts : new Date().toISOString();
    }

    // Everything else (incl. Additional Request with |, commas, newlines, 한글)
    // stays as a single string in its own cell.
    return rawValue == null ? '' : String(rawValue);
  });
}

/**
 * Ensure the sheet has exactly the 26 canonical columns with the correct
 * header row. Backs up existing data ONCE before any destructive change so no
 * reservation is ever lost. Idempotent: a no-op once the sheet is canonical.
 */
function ensureSheetStructure_(ss, sheet) {
  var expected = SHEET_HEADERS.slice();
  var expectedWidth = expected.length; // 26

  // 1) Make sure at least 26 columns physically exist (non-destructive).
  if (sheet.getMaxColumns() < expectedWidth) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), expectedWidth - sheet.getMaxColumns());
  }

  var lastColumn = Math.max(sheet.getLastColumn(), expectedWidth);
  var currentHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  var headerMatches = expected.every(function (header, index) {
    return String(currentHeaders[index] == null ? '' : currentHeaders[index]).trim() === header;
  });

  var hasExtraHeaders = currentHeaders
    .slice(expectedWidth)
    .some(function (header) {
      return String(header == null ? '' : header).trim() !== '';
    });

  var hasExtraColumns = sheet.getMaxColumns() > expectedWidth;

  // Already canonical — nothing to do.
  if (headerMatches && !hasExtraHeaders && !hasExtraColumns) {
    return;
  }

  // 2) Back up existing data ONCE before touching anything destructive.
  backupSheetOnce_(ss, sheet);

  // 3) Fix the header row only (row 1). Existing DATA rows are never deleted.
  if (!headerMatches || hasExtraHeaders) {
    sheet.getRange(1, 1, 1, lastColumn).clearContent();
    sheet.getRange(1, 1, 1, expectedWidth).setValues([expected]);
  }

  // 4) Remove any real columns beyond Z (26). Safe because we backed up first.
  var maxColumns = sheet.getMaxColumns();
  if (maxColumns > expectedWidth) {
    sheet.deleteColumns(expectedWidth + 1, maxColumns - expectedWidth);
  }
}

/**
 * Copy the whole sheet to a timestamped backup tab, but only the first time a
 * migration is needed and only when there is actual data to protect. Guarded by
 * a Script Property so repeated submissions never spam backup tabs.
 */
function backupSheetOnce_(ss, sheet) {
  var props = PropertiesService.getScriptProperties();
  var doneKey = 'SHEET_MIGRATION_BACKUP_DONE';

  if (props.getProperty(doneKey)) {
    return; // already backed up for this migration
  }

  if (sheet.getLastRow() < 2) {
    // No data rows below the header — nothing to lose, just mark as done.
    props.setProperty(doneKey, new Date().toISOString());
    return;
  }

  var tz = Session.getScriptTimeZone() || 'UTC';
  var stamp = Utilities.formatDate(new Date(), tz, 'yyyyMMdd-HHmmss');
  var backup = sheet.copyTo(ss);
  backup.setName((sheet.getName() + '_backup_' + stamp).substring(0, 100));
  props.setProperty(doneKey, stamp);
}

/**
 * Read the submitted fields from either form-encoded params (FormData / iframe
 * fallback) or a JSON body. Returns a plain name->value map; buildRow_ then
 * selects the canonical fields by name.
 */
function getPayload_(e) {
  var params = (e && e.parameter) ? e.parameter : {};
  var raw = (e && e.postData && e.postData.contents) ? String(e.postData.contents) : '';
  var body = {};

  if (raw) {
    try {
      body = JSON.parse(raw);
    } catch (jsonErr) {
      body = parseQueryString_(raw);
    }
  }

  var merged = {};
  copyObject_(merged, params);
  copyObject_(merged, body);
  return merged;
}

function parseQueryString_(raw) {
  var out = {};
  var text = String(raw || '');
  if (!text || text.indexOf('=') === -1) return out;

  var parts = text.split('&');
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (!part) continue;

    var idx = part.indexOf('=');
    var key = idx === -1 ? part : part.substring(0, idx);
    var val = idx === -1 ? '' : part.substring(idx + 1);

    var decodedKey = decodeURIComponent(String(key).replace(/\+/g, ' '));
    var decodedVal = decodeURIComponent(String(val).replace(/\+/g, ' '));
    out[decodedKey] = decodedVal;
  }

  return out;
}

function copyObject_(target, source) {
  if (!source) return;
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

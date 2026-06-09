var SPREADSHEET_ID = '1Z_u05kBS1r37kRkJ8W04tOoJAXi-OFZzD9T8JIm3seg'; // Paste Google Sheet ID here (between /d/ and /edit in sheet URL)
var SHEET_NAME = 'Leads';

var HEADERS = [
  'Timestamp',
  'Full Name',
  'Email',
  'Nationality',
  'Additional Request',
  'Cart Summary',
  'Value'
];

function doPost(e) {
  try {
    var data = getPayload_(e);
    appendLeadRow_(data);
    return json_({ ok: true, via: 'doPost' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  return json_({ ok: true, message: 'webhook live' });
}

function appendLeadRow_(data) {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error('Spreadsheet not found. Set SPREADSHEET_ID in Code.gs.');
  }

  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  ensureHeaders_(sheet, HEADERS);

  var row = [
    new Date(),
    pick_(data, ['Full Name', 'fullName', 'name']),
    pick_(data, ['Email', 'email']),
    pick_(data, ['Nationality', 'nationality']),
    pick_(data, ['Additional Request', 'additionalRequest', 'message']),
    pick_(data, ['Cart Summary', 'cartSummary']),
    numberValue_(pick_(data, ['Value', 'value']))
  ];

  sheet.appendRow(row);
}

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

function pick_(obj, keys) {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj[key] !== undefined && obj[key] !== null && String(obj[key]).trim() !== '') {
      return obj[key];
    }
  }
  return '';
}

function numberValue_(value) {
  var amount = Number(value || 0);
  return isFinite(amount) ? amount : 0;
}

function ensureHeaders_(sheet, headers) {
  var width = headers.length;
  var current = sheet.getRange(1, 1, 1, width).getValues()[0];

  var different = false;
  for (var i = 0; i < width; i++) {
    if (current[i] !== headers[i]) {
      different = true;
      break;
    }
  }

  if (different) {
    sheet.getRange(1, 1, 1, width).setValues([headers]);
  }
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}



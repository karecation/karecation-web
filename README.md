# Korean AI Cover-Letter Polisher MVP

한국 취업 지원자를 위한 자기소개서 편집 MVP입니다.  
범용 챗봇이 아니라, **한국 채용 문맥에서 자기소개서를 자연스럽고 설득력 있게 다듬는 특화 앱**으로 설계했습니다.

## 핵심 가치
- 사용자가 쓴 원문 기반 편집
- 사실 보존 (허위 경험/성과 생성 금지)
- 논리 흐름 개선
- 클리셰/추상어 축소
- 과하게 AI 같은 문체 완화

## 주요 기능
- `/` 랜딩 페이지
- Supabase 이메일 매직링크 로그인 (`/login`)
- 보호 라우트 (`/chat`, `/chat/[sessionId]`, `/history`)
- 채팅형 편집 입력
  - 회사명, 직무, 문항, 초안, 목표 글자 수(선택), 편집 목표
- 편집 목표 버튼
  - 더 간결하게
  - 더 진정성 있게
  - 직무 맞춤형으로
  - 두괄식으로
  - AI 티 줄이기
  - 문장 부드럽게
- AI 응답 구조
  - polished version
  - key edits summary
  - cliché warnings
  - optional follow-up question
  - character count
- 원문/수정본 비교 패널(변경 하이라이트)
- 세션/리비전 저장 및 히스토리 재열기
- 최종 검토 디스클레이머 노출

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 스타일 컴포넌트
- Supabase (Auth + DB)
- OpenAI API
- Zod

## 프로젝트 구조

```text
src/
  app/
    page.tsx
    login/page.tsx
    chat/page.tsx
    chat/[sessionId]/page.tsx
    history/page.tsx
    api/refine/route.ts
    auth/callback/route.ts
    auth/signout/route.ts
  components/
    header.tsx
    landing-hero.tsx
    chat-input-form.tsx
    goal-selector.tsx
    character-counter.tsx
    revision-card.tsx
    compare-panel.tsx
    session-list.tsx
    empty-state.tsx
    loading-state.tsx
    chat-workspace.tsx
  lib/
    prompts.ts
    schemas.ts
    supabase/
      client.ts
      server.ts
      middleware.ts
supabase/
  migrations/202604220001_init.sql
docs/
  sample-refinements.md
```

## 환경 변수
`.env.local` 파일 생성:

```bash
cp .env.example .env.local
```

필수 값:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

## Supabase 설정
1. Supabase 프로젝트 생성
2. Authentication > Email 로그인 활성화
3. SQL Editor에서 `supabase/migrations/202604220001_init.sql` 실행
4. (선택) `supabase/seeds/demo.sql` 실행 전 user_id UUID 교체
5. Auth Redirect URL에 아래 URL 추가
   - `http://localhost:3000/auth/callback`

## 로컬 실행

```bash
npm install
npm run dev
```

검증:

```bash
npm run lint
npm run typecheck
npm run build
```

## API 명세

### `POST /api/refine`

요청:

```json
{
  "companyName": "카카오",
  "jobRole": "백엔드 개발자",
  "essayQuestion": "지원 동기를 작성해 주세요.",
  "draft": "원문 초안...",
  "targetLength": 800,
  "editGoal": "더 간결하게",
  "sessionId": "optional-uuid"
}
```

응답:

```json
{
  "polishedText": "다듬어진 문장",
  "editSummary": ["핵심 수정 1", "핵심 수정 2"],
  "clicheWarnings": ["과장 표현 예시"],
  "followUpQuestion": "선택적 후속 질문",
  "characterCount": 742
}
```

## AI 프롬프트 품질 전략
- 시스템 프롬프트: `src/lib/prompts.ts`
- 재사용 가능한 프롬프트 문서: `docs/improved-system-prompt.md`
- 구조화 JSON 강제 출력
- 사실 추가 금지 규칙
- 한국어 자연스러움/직무 맥락 우선
- 목표 글자 수 엄수(±8% 또는 ±20자)
- 길이 초과 시 2차 길이 보정 단계 적용

## 샘플 입출력 5종
요청하신 케이스(지원동기/협업 경험/실패 경험/성격 장단점/입사 후 포부)는 아래 문서에 포함했습니다.

- `docs/sample-refinements.md`

## v2 개선 아이디어
1. 문항 유형 자동 분류 후 편집 전략 자동 최적화
2. 회사/직무별 용어집 및 금칙어 커스터마이징
3. 문장 단위 변경 이유 툴팁(Explain why)
4. 리비전 버전 비교 히스토리(2개 버전 선택 비교)
5. 팀 피드백 공유 모드(코멘트 협업)

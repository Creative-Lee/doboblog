# CLAUDE.md

이 파일은 이 저장소에서 Claude Code(claude.ai/code)가 코드 작업을 할 때 참고할 가이드라인을 제공합니다.

## 사용자 지침

- 사용자와의 모든 대화는 **한국어로 진행**합니다.

---

## 프로젝트 개요

이 프로젝트는 **최신 기술 스택을 활용한 풀스택 블로그 개발 프로젝트**입니다.  
구조는 **Turborepo 기반의 모노레포(monorepo)** 형태로 구성되어 있으며,  
프론트엔드 애플리케이션은 **Feature-Sliced Design (FSD)** 아키텍처를 따릅니다.

**핵심 기술 스택:**

- Turborepo – 모노레포 관리
- Next.js 15.4.6 + Turbopack – 프론트엔드
- MDX – 콘텐츠 관리
- Tailwind CSS 4 – 스타일링
- Radix UI – 접근성 높은 UI 구성 요소
- pnpm (>=10) – 패키지 매니저
- Node.js (>=22) – 런타임 환경

---

## 모노레포 구조

```
doboblog/
├── apps/
│   └── fe/              # 프론트엔드 Next.js 애플리케이션 (포트 3000)
├── packages/
│   ├── ui/              # 공유 UI 컴포넌트
│   ├── typescript-config/ # 공유 TypeScript 설정
│   └── eslint-config/   # 공유 ESLint 설정
├── docs/
│   ├── CURRICULUM.md    # 학습 커리큘럼 및 진행 현황
│   └── learning/        # 주간 학습 로그
└── turbo.json          # Turborepo 파이프라인 설정
```

---

## 공통 명령어

### 개발

```bash
# 모든 앱을 개발 모드로 실행
pnpm dev

# 특정 앱만 실행
pnpm dev --filter=fe

# fe 앱만 직접 실행
cd apps/fe && pnpm dev
```

### 빌드

```bash
# 모든 앱 빌드
pnpm build

# 특정 앱 빌드
pnpm build --filter=fe

# 타입 검사
pnpm check-types
```

### 린트 및 포맷팅

```bash
# 전체 린트
pnpm lint

# 전체 코드 포맷
pnpm format
```

---

## 프론트엔드 애플리케이션 아키텍처 (`apps/fe`)

`apps/fe` 애플리케이션은 **Feature-Sliced Design (FSD)** 아키텍처를 엄격히 따릅니다.

### FSD 레이어 구조

```
apps/fe/src/
├── app-config/        # 앱 초기화, 라우팅, 글로벌 프로바이더
├── pages/            # 라우트 단위 페이지 컴포넌트 (UI만)
├── widgets/          # 복합적이고 독립적인 UI 블록 (예: Header, GameMap, PostList, PostDetail)
├── features/         # 사용자 시나리오 및 비즈니스 기능 (예: postManagement, categoryNavigation)
├── entities/         # 비즈니스 엔티티/도메인 모델 (예: post, category, character)
└── shared/           # 재사용 가능한 유틸리티, 컴포넌트, API 클라이언트
    ├── ui/          # 공통 UI 컴포넌트
    ├── lib/         # 공통 유틸리티 및 훅
    ├── api/         # API 클라이언트
    └── config/      # 상수 및 환경설정
```

---

### FSD 임포트 규칙 (**중요**)

**단방향 의존성 흐름을 반드시 지켜야 합니다:**

```
app-config → pages → widgets → features → entities → shared → (외부 라이브러리만)
```

**금지사항:**

- ❌ 상위 레이어로의 임포트 (예: features → widgets)
- ❌ 동일 레이어 간 임포트 (예: entities → 다른 entities)
- ❌ 순환 참조
- ❌ shared 레이어에서 내부 레이어 참조

**올바른 예시:**

```typescript
// ✅ features가 entities를 사용하는 경우
import { postModel } from 'entities/post';

// ✅ widgets가 features를 사용하는 경우
import { PostManagement } from 'features/postManagement';

// ✅ 모든 레이어는 shared 사용 가능
import { Button } from 'shared/ui';
```

---

### 세그먼트 구조

각 슬라이스(feature/entity/widget)는 다음과 같은 세그먼트를 가집니다:

- **ui/** – React 컴포넌트 및 스타일
- **model/** – 비즈니스 로직, 상태 관리, 타입
- **api/** – API 호출 및 관련 타입
- **lib/** – 슬라이스 전용 유틸리티

---

## 네이밍 규칙

### 파일

| 종류           | 형식                       | 예시                         |
| -------------- | -------------------------- | ---------------------------- |
| React 컴포넌트 | `PascalCase.tsx`           | `PostForm.tsx`               |
| 비즈니스 로직  | `camelCase.ts`             | `postStore.ts`, `userApi.ts` |
| CSS 모듈       | `ComponentName.module.css` | `PostForm.module.css`        |
| 설정 파일      | `kebab-case`               | `next.config.ts`             |

### 디렉토리

| 구분             | 형식         | 예시                                   |
| ---------------- | ------------ | -------------------------------------- |
| FSD 레이어       | `lowercase`  | `app-config`, `pages`, `features`      |
| 기능/엔티티 이름 | `camelCase`  | `postManagement`, `categoryNavigation` |
| 위젯 이름        | `PascalCase` | `GameMap`, `PostList`                  |
| 세그먼트         | `lowercase`  | `ui`, `model`, `api`, `lib`            |

### 코드 스타일

- **변수명**: `camelCase`, 불리언은 `is`, `has`, `can`, `should` 접두사 사용
- **함수명**: `camelCase`, 동사로 시작, 이벤트 핸들러는 `handle` 접두사 사용
- **상수**: `UPPER_SNAKE_CASE`
- **클래스**: `PascalCase`

---

## Git 워크플로우 (GitHub Flow)

**중요: `main` 브랜치에 직접 커밋 금지**

### 기본 흐름

1. **항상 기능 브랜치에서 작업**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **브랜치 네이밍 규칙**
   - 기능: `feature/feature-name`
   - 문서: `docs/description`
   - 버그 수정: `fix/issue-description`
   - 리팩토링: `refactor/scope`

3. **커밋 메시지 규칙** (Conventional Commits 형식)

   ```
   <type>(<scope>): <description>

   [optional body]
   ```

   타입: `feat`, `fix`, `docs`, `lint`, `refactor`, `test`, `config`

4. **Pull Request 규칙**
   - `.github/pull_request_template.md` 템플릿 사용
   - PR 제목에는 `feat:` 등의 타입 접두사 포함 금지  
     예시: ✅ “MDX 블로그 포스팅 기능 추가”
   - 머지는 **Squash Merge** 사용

5. **병합 후 정리**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/your-feature-name
   ```

---

## 커리큘럼 관리

이 프로젝트는 학습형 프로젝트로, 구조화된 커리큘럼을 추적합니다.

1. **진행 현황 표시**  
   `docs/CURRICULUM.md` 파일에서 완료된 단계에 체크 표시 추가
2. **학습 로그 기록**  
   `docs/learning/week[N]/day[N].md` 파일에 학습 내용 작성
3. **커밋 규칙**  
   커리큘럼 업데이트와 학습 로그는 하나의 커밋으로 함께 커밋
   ```
   docs: Week [N] Day [N] 완료 및 학습 내용 정리
   ```

---

## Next.js 설정

- **MDX 지원**: Rust 기반 MDX 컴파일러(`mdxRs: true`) 사용
- **페이지 확장자**: `.js`, `.jsx`, `.md`, `.mdx`, `.ts`, `.tsx`
- **개발 서버 포트**: 3000
- **경로 별칭**: `@/*` → 프로젝트 루트

---

## TypeScript 설정

- 공유 설정 파일: `@repo/typescript-config/nextjs.json`
- 증분 컴파일 활성화
- MDX 파일 포함

---

## 중요 참고사항

- **엔진 요구사항**: Node.js ≥22, pnpm ≥10
- **shadcn/ui 사용 안 함**: Radix UI를 직접 스타일링하여 사용
- **Turborepo 캐싱**: `.next/`에 빌드 결과 캐싱 (`.next/cache/`는 제외)
- **MDX 워크플로우**: 컴포넌트를 포함한 MDX 콘텐츠 관리 가능

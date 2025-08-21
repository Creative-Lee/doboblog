# Week 1 Day 2 - 모노레포 의존성 관리 및 UI 라이브러리 설정

**날짜**: 2025-01-12  
**소요시간**: 약 3시간  
**완료 단계**: Step 1.3

## 🎯 학습 목표

- 모노레포에서의 의존성 관리 시스템 이해
- Node.js 버전 관리 및 engines 필드 활용
- shadcn/ui를 활용한 현대적 UI 개발 환경 구축
- 프로젝트 버전 정책 수립

## 📝 주요 학습 내용

### 1. 모노레포 앱 구조 재정비

- **기존 구조 문제점**: Turborepo 스타터의 `web`, `docs` 앱이 학습 목적과 맞지 않음
- **해결책**: 기존 앱 삭제 후 새로운 `fe` 앱 생성
- **명령어**: `npx create-next-app@latest fe --typescript --tailwind --app --import-alias "@/*" --yes`

### 2. 워크스페이스 의존성 시스템

#### **workspace:* 의존성**
```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```
- **의미**: 모노레포 내부 패키지를 외부 npm 패키지처럼 import 가능
- **장점**: 타입 안전성 + 코드 재사용성 극대화

#### **심볼릭 링크 (Symbolic Links)**
- **개념**: 실제 파일 대신 다른 파일/디렉터리를 가리키는 포인터
- **pnpm 활용**: node_modules/.pnpm에서 의존성 중복 방지
- **실제 경로**: `apps/fe/node_modules/@repo/ui` → `../../../packages/ui`

### 3. pnpm 고급 기능

#### **pnpm-lock.yaml 구조**
```yaml
importers:
  .:  # 루트
    dependencies: {...}
  apps/fe:  # fe 앱
    dependencies: {...}
```
- **importers**: 각 워크스페이스별 의존성 추적
- **단일 lockfile**: 전체 모노레포의 의존성을 하나의 파일로 관리

#### **pnpm --filter 명령어**
```bash
pnpm --filter fe add react-query     # fe 앱에만 패키지 설치
pnpm --filter @repo/ui build         # ui 패키지만 빌드
pnpm --filter "./apps/*" test         # 모든 앱에서 테스트 실행
```

### 4. 공유 설정 활용

#### **TypeScript 설정 공유**
```json
// apps/fe/tsconfig.json
{
  "extends": "@repo/typescript-config/nextjs.json"
}
```

#### **ESLint 설정 공유**
```javascript
// apps/fe/eslint.config.mjs
import { nextJsConfig } from "@repo/eslint-config/next.js";
export default nextJsConfig;
```

### 5. Node.js 버전 관리

#### **NVM을 통한 LTS 업그레이드**
```bash
nvm install --lts          # Node.js 22.18.0 설치
nvm use --lts              # LTS 버전 사용
nvm alias default 22.18.0  # 기본 버전 설정
```

#### **engines 필드 전략**
- **루트**: 전체 프로젝트 기준선 (`"node": ">=22"`)
- **개별 앱**: 루트 이상의 요구사항만 허용
- **검증 시스템**: 자동화된 스크립트로 정책 강제

### 6. shadcn/ui 도입

#### **선택 이유**
- Radix UI 기반으로 접근성 우수
- Tailwind CSS와 완벽 통합
- 타입 안전한 컴포넌트 시스템

#### **설치 과정**
```bash
pnpm add lucide-react clsx tailwind-merge @tailwindcss/typography
npx shadcn@latest init
npx shadcn@latest add button
```

#### **Tailwind CSS 버전 호환성**
- **문제**: 프로젝트는 Tailwind v4, shadcn/ui는 v3 기준
- **해결**: 현재는 v4로 진행, 호환성 이슈 발생 시 v3로 다운그레이드 고려

## 🔧 실습 내용

### 1. 프로젝트 구조 변경
```bash
# 기존 앱 삭제
rm -rf apps/web apps/docs

# 새 fe 앱 생성 
cd apps && npx create-next-app@latest fe

# 공유 설정 적용
# - tsconfig.json 수정
# - eslint.config.mjs 수정  
# - package.json 의존성 정리
```

### 2. MDX 설정
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};
```

### 3. engines 검증 시스템 구축
```javascript
// scripts/validate-engines.js
// - 루트 engines 요구사항 파싱
// - 개별 앱 engines 검증
// - 위반 시 에러 출력 및 프로세스 중단
```

## 💡 중요한 깨달음

### 1. 모노레포 의존성의 복잡성
- **단순해 보이지만**: workspace:* 뒤에는 심볼릭 링크, pnpm 알고리즘 등 복잡한 시스템
- **실제 동작**: node_modules 구조를 이해해야 트러블슈팅 가능

### 2. 버전 관리의 중요성
- **개별 자유 vs 전체 일관성**: 협업에서는 일관성이 더 중요
- **검증 자동화**: 사람의 실수를 방지하는 시스템 필수

### 3. GitHub Flow 준수의 중요성
- **실수**: main 브랜치 직접 커밋
- **교정**: feature 브랜치로 이동 + PR 생성
- **교훈**: 규칙은 예외 없이 준수해야 함

## 🚨 주의사항

### 1. Tailwind CSS 버전 충돌
- shadcn/ui와 Tailwind v4 호환성 확인 필요
- 문제 발생 시 v3로 다운그레이드 고려

### 2. engines 정책 일관성
- 루트와 개별 앱 간 engines 설정 불일치 방지
- 자동 검증 시스템으로 정책 강제

### 3. 커밋 단위
- 논리적 단위로 커밋 분리 필요
- 한 번에 너무 많은 변경사항 포함하지 말 것

## 🔗 관련 링크

- [pnpm Workspaces 공식 문서](https://pnpm.io/workspaces)
- [shadcn/ui 공식 문서](https://ui.shadcn.com/)
- [Tailwind CSS v4 문서](https://tailwindcss.com/)
- [GitHub Flow 가이드](https://guides.github.com/introduction/flow/)

## 🎯 다음 단계

**Step 1.3 완료 후**: 
- 기본 레이아웃 및 다크모드 구현 (Step 1.4)
- MDX 블로그 시스템 구축 (Step 1.5)
- Vercel 배포 및 최적화 (Step 1.6)

## 📋 질문과 답변 요약

### Q: CVA(Class Variance Authority)가 꼭 필요한가?
**A**: 필수는 아님. 타입 안전한 CSS 변형 관리에 유용하지만, 학습 초기에는 핵심에 집중하기 위해 제외.

### Q: engines 필드 상속 방식은?
**A**: 자동 상속 안됨. 각 package.json이 독립적으로 체크됨. 따라서 명시적 관리 필요.

### Q: 모노레포에서 IDE 작업 방식은?
**A**: 95% 케이스에서 루트 경로 오픈. 크로스 레퍼런스, 통합 개발 경험 때문.

### Q: 개별 앱의 engines 정책은?
**A**: 루트 요구사항 이상만 허용. 하향 호환은 금지, 상향 호환은 허용.

### Q: packageManager 버전 명시 효과는?
**A**: Corepack 활성화 시 정확한 버전 사용. 팀 협업에서 일관성 확보에 유용.

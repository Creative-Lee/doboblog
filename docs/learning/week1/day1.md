# Week 1 Day 1: Turborepo 모노레포 환경 구축

## 🎯 학습 목표

- [ ] ✅ Turborepo 모노레포 구조 이해 및 구축
- [ ] ✅ Next.js 15.4.2 + Turbopack 개발 환경 설정
- [ ] ✅ 공유 패키지 시스템 구축 (UI, TypeScript, ESLint)
- [ ] ✅ GitHub Flow 브랜치 관리 규칙 확립
- [ ] ✅ 프로젝트 관리 도구 구축 (PR 템플릿, 학습 정리)

## 📚 핵심 개념

### 1. Turborepo 모노레포 아키텍처

**Turborepo**는 여러 패키지를 효율적으로 관리하는 고성능 모노레포 도구입니다.

- **장점**: 빌드 캐싱, 병렬 실행, 코드 공유, 의존성 최적화
- **핵심 개념**: 
  - **Pipeline**: 빌드 작업의 실행 순서와 의존성 정의
  - **Caching**: 이전 빌드 결과 재사용으로 성능 최적화
  - **Workspace**: 독립적인 패키지들의 집합

### 2. Next.js 15.4.2 + Turbopack

**Turbopack**은 Rust 기반의 차세대 번들러로 Webpack보다 700배 빠른 성능을 제공합니다.

- **특징**: 
  - 점진적 컴파일 (Incremental Compilation)
  - 함수 레벨 캐싱
  - 병렬 처리 최적화

### 3. 공유 패키지 시스템

모노레포의 핵심 가치인 **코드 재사용성**을 극대화하는 구조입니다.

- **`@repo/ui`**: 재사용 가능한 React 컴포넌트
- **`@repo/typescript-config`**: 공통 TypeScript 설정
- **`@repo/eslint-config`**: 공통 ESLint 규칙

## 🛠️ 실습 내용

### 단계 1: 프로젝트 환경 초기화 (30분)

```bash
# 1. 기존 프로젝트 구조 확인
ls -la

# 2. Turborepo 초기화
npx create-turbo@latest . --package-manager pnpm

# 3. 의존성 설치
pnpm install
```

**생성된 구조**:
```
doboblog/
├── apps/                  # 실행 가능한 애플리케이션들
│   ├── web/              # Next.js 프론트엔드 (포트 3000)
│   └── docs/             # 문서 앱 (포트 3001)
├── packages/             # 공유 패키지들
│   ├── ui/               # 재사용 가능한 UI 컴포넌트
│   ├── typescript-config/ # 공통 TypeScript 설정
│   └── eslint-config/    # 공통 ESLint 규칙
├── turbo.json            # Turborepo 빌드 파이프라인 설정
└── pnpm-workspace.yaml   # pnpm 워크스페이스 설정
```

### 단계 2: 개발 서버 실행 테스트 (15분)

```bash
# 개별 앱 실행 방법 (turbo 명령어 오류 시)
cd apps/web && npm run dev     # 포트 3000
cd apps/docs && npm run dev    # 포트 3001

# 두 앱 동시 확인
lsof -i :3000  # web 앱 확인
lsof -i :3001  # docs 앱 확인
```

**실행 결과 확인**:
- ✅ http://localhost:3000 - Turborepo 웹 앱 정상 실행
- ✅ http://localhost:3001 - Turborepo 문서 앱 정상 실행
- ✅ 공유 UI 컴포넌트 `@repo/ui/button` 정상 작동

### 단계 3: GitHub Flow 규칙 문서화 (45분)

```bash
# 1. Cursor Rules 디렉터리 생성
mkdir -p .cursor/rules

# 2. GitHub Flow 규칙 문서 작성
# .cursor/rules/github-flow.mdc 생성
```

**핵심 브랜치 전략**:
- **main**: 항상 배포 가능한 안정적인 코드
- **feature/[기능명]**: 새로운 기능 개발
- **PR 리뷰**: 모든 변경사항은 Pull Request를 통해서만 병합

### 단계 4: PR 및 학습 관리 도구 구축 (30분)

```bash
# 1. GitHub PR 템플릿 생성
mkdir -p .github
# .github/pull_request_template.md 작성

# 2. 학습 정리 디렉터리 구조 생성
mkdir -p docs/learning/week{1,2,3,4}
# docs/learning/README.md 및 day1.md 작성
```

## 💡 배운 점

### 🎓 새롭게 알게 된 기술 개념

1. **Turbopack의 성능 우위**
   - Webpack 대비 700배 빠른 컴파일 속도
   - 함수 레벨 캐싱으로 점진적 빌드 최적화
   - Rust 기반 아키텍처의 메모리 효율성

2. **모노레포의 실질적 장점**
   - 코드 중복 제거: 공통 컴포넌트 및 설정 공유
   - 의존성 관리 일원화: 버전 충돌 방지
   - 빌드 최적화: 변경된 패키지만 선택적 빌드

3. **pnpm 워크스페이스의 효율성**
   - 심볼릭 링크 기반 의존성 관리
   - 디스크 용량 절약 (중복 패키지 제거)
   - 빠른 설치 속도

### 🚀 프로젝트 관리 측면

1. **GitHub Flow의 실용성**
   - 단순하고 명확한 브랜치 전략
   - 지속적 배포(Continuous Deployment)에 최적화
   - 코드 리뷰 문화 자연스럽게 정착

2. **체계적인 문서화의 중요성**
   - PR 템플릿으로 일관된 리뷰 프로세스
   - 학습 기록으로 지식 축적 및 회고
   - 커리큘럼 진행상황 추적

## 🤔 어려웠던 점

### 문제 1: `turbo` 명령어 오류
**문제**: `zsh: command not found: turbo`
```bash
leedohyeon@idohyeon-ui-MacBookAir:~/Desktop/code/project/doboblog% turbo dev
zsh: command not found: turbo
```

**해결**: 개별 앱 디렉터리에서 npm run dev 실행
```bash
cd apps/web && npm run dev     # 성공
cd apps/docs && npm run dev    # 성공
```

**학습**: 
- Global turbo 설치 필요성 확인
- 모노레포 환경에서의 명령어 실행 방법 학습
- 대안 실행 방법의 중요성

### 문제 2: GitHub Flow 워크플로우 미숙
**문제**: 처음에 main 브랜치에서 직접 작업하려 함

**해결**: 
1. GitHub Flow 규칙 문서화
2. feature 브랜치 생성 및 작업 분리
3. PR 단위로 작업 관리

**학습**:
- 브랜치 전략의 중요성과 실용성
- 작업 단위별 PR 분리의 장점
- 코드 리뷰 프로세스의 체계화

### 문제 3: 서버 실행 시 파일 경로 오류
**문제**: Next.js 앱 실행 중 app 디렉터리 스캔 오류
```
[Error: ENOENT: no such file or directory, scandir '/Users/.../apps/web/app']
```

**해결**: 
- git pull로 최신 파일 동기화
- PR 머지 후 로컬 환경 업데이트

**학습**:
- Git 동기화의 중요성
- 협업 환경에서의 파일 상태 관리

## 🔗 참고 자료

### 📖 공식 문서
- [Turborepo 공식 문서](https://turbo.build/repo/docs)
- [Next.js 15 문서](https://nextjs.org/docs)
- [pnpm 워크스페이스](https://pnpm.io/workspaces)
- [GitHub Flow 가이드](https://guides.github.com/introduction/flow/)

### 🛠️ 도구 및 설정
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Cursor Rules 문서](https://docs.cursor.sh/cmdk/rules)
- [Turbopack 성능 벤치마크](https://turbo.build/pack/docs/benchmarks)

### 💡 참고 아티클
- [모노레포 아키텍처 설계](https://engineering.toss.com/article/what-is-monorepo)
- [Next.js App Router vs Pages Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

## ✅ 완료 체크리스트

### 🏗️ 환경 구축
- [x] Turborepo 모노레포 구조 생성
- [x] Next.js 15.4.2 + Turbopack 웹 앱 설정
- [x] 문서 앱 (포트 3001) 설정
- [x] pnpm 워크스페이스 구성

### 📦 공유 패키지
- [x] @repo/ui 컴포넌트 라이브러리 확인
- [x] @repo/typescript-config 공통 설정 확인
- [x] @repo/eslint-config 공통 규칙 확인

### 🧪 테스트 검증
- [x] 두 앱 동시 실행 (포트 3000, 3001)
- [x] 공유 UI 컴포넌트 작동 확인
- [x] Hot Reload 기능 확인

### 📋 프로젝트 관리
- [x] GitHub Flow 브랜치 전략 문서화
- [x] PR 템플릿 생성 및 적용
- [x] 학습 정리 디렉터리 구조 생성
- [x] Week 1 Day 1 학습 내용 정리

### 🚀 워크플로우
- [x] feature 브랜치 생성 및 작업
- [x] PR 생성 및 스쿼시 머지
- [x] 브랜치 정리 및 main 동기화

---

## 📈 다음 학습 계획

### Week 1 Day 2 예정 작업
1. **MDX 통합 환경 구축**
   - @next/mdx 설정
   - 코드 하이라이팅 (react-syntax-highlighter)
   - Typography 스타일링

2. **블로그 기본 구조 설계**
   - 페이지 라우팅 구조
   - 레이아웃 컴포넌트
   - 네비게이션 시스템

3. **콘텐츠 관리 시스템**
   - MDX 파일 구조 설계
   - 메타데이터 관리
   - 동적 라우팅

**예상 소요 시간**: 3-4시간
**핵심 학습 포인트**: MDX 생태계, Next.js App Router, 정적 사이트 생성

---

**🎉 Week 1 Day 1 완료! Turborepo 모노레포 환경이 성공적으로 구축되었습니다!**
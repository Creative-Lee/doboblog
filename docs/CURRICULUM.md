# 📚 4주 풀스택 블로그 개발 커리큘럼

> **목표**: MDX 기반 Next.js 블로그 + Express API + AWS 인프라까지 4주 완성  
> **시간**: 주 4-6시간 (총 16-24시간)  
> **철학**: Build → Deploy → Expand

## 📅 전체 일정 개요

| 주차       | 주제                 | 주요 성과물                | 배포 환경          |
| ---------- | -------------------- | -------------------------- | ------------------ |
| **Week 1** | Next.js MDX 블로그   | 작동하는 정적 블로그       | Vercel             |
| **Week 2** | Express + PostgreSQL | REST API 서버              | 로컬 + 클라우드 DB |
| **Week 3** | Docker + AWS         | 컨테이너화 + 클라우드 배포 | AWS EC2            |
| **Week 4** | CI/CD + 고급기능     | 자동화 + 프로덕션 운영     | 완전 자동화        |

---

## 🚀 Week 1: Next.js MDX 블로그

### 🎯 Week 1 전체 학습 목표

- Turborepo 모노레포 구조 이해 및 활용
- Next.js 14 App Router 기본 숙지
- MDX 기반 컨텐츠 관리 시스템 구축
- Vercel 배포 프로세스 경험

## Step 1.1: 프로젝트 환경 준비

### 🎯 학습 목표

- 모노레포 개념과 Turborepo 도구 이해
- 멀티 패키지 관리 시스템 구축
- 현대적 개발 워크플로우 기반 마련

### ⏱ 예상 소요시간: 30분

### ✅ 액션 아이템

- [x] 기존 프로젝트 백업 (`mv doboblog doboblog-backup`)
- [x] Turborepo 초기화 (`npx create-turbo@latest doboblog`)
- [x] 생성된 구조 확인 및 이해
- [x] `turbo dev` 명령어 실행 테스트

### 🎯 완료 기준

- [x] `turbo dev` 실행 시 에러 없이 개발 서버 시작
- [x] `apps/`, `packages/`, `turbo.json` 구조 확인 완료

### 💡 핵심 개념

**모노레포**: 여러 앱이 하나의 저장소에서 관리되는 구조로 코드 공유와 의존성 관리 효율화
**Turborepo**: 빌드 캐싱과 병렬 실행으로 개발 속도 향상

### 🔗 전체 맥락에서의 위치

**이전**: 없음 (시작점) → **현재**: 기초 환경 → **다음**: Next.js 앱 생성

### ⚠️ 주의사항

- 백업은 반드시 수행 (기존 작업 보호)
- Node.js 18+ 버전 확인 필요

## Step 1.2: Next.js 앱 생성 및 설정

### 🎯 학습 목표

- Next.js 14 App Router 아키텍처 이해
- TypeScript + Tailwind CSS 통합 환경 구축
- MDX 지원을 위한 기본 설정 완료

### ⏱ 예상 소요시간: 1시간

### ✅ 액션 아이템

- [ ] Next.js 앱 생성 (`cd apps && npx create-next-app@latest web --typescript --tailwind --app`)
- [ ] MDX 패키지 설치 (`npm install @next/mdx @mdx-js/loader @mdx-js/react`)
- [ ] `next.config.js`에 MDX 설정 추가
- [ ] 개발 서버 실행 및 접속 확인 (`http://localhost:3000`)

### 🎯 완료 기준

- Next.js 앱이 브라우저에서 정상 렌더링
- MDX 설정이 올바르게 적용됨

### 💡 핵심 개념

**App Router**: Next.js 13+의 새로운 라우팅 시스템으로 향상된 성능과 개발자 경험
**MDX**: Markdown + JSX 조합으로 컴포넌트가 포함된 콘텐츠 작성 가능

### 🔗 전체 맥락에서의 위치

**이전**: 기초 환경 → **현재**: Next.js 앱 설정 → **다음**: UI 라이브러리 설정

### ⚠️ 주의사항

- 포트 충돌 시 `lsof -i :3000`으로 확인
- MDX 설정 후 서버 재시작 필요

## Step 1.3: UI 라이브러리 및 스타일 설정

### 🎯 학습 목표

- 현대적인 컴포넌트 기반 UI 개발 환경 구축
- 접근성이 고려된 Headless UI 라이브러리 활용
- 타입 안전한 스타일 관리 시스템 구축

### ⏱ 예상 소요시간: 1시간

### ✅ 액션 아이템

- [ ] UI 라이브러리 설치 (`npm install @radix-ui/react-slot @radix-ui/react-dropdown-menu lucide-react clsx tailwind-merge class-variance-authority`)
- [ ] Typography 플러그인 설치 (`npm install @tailwindcss/typography`)
- [ ] `tailwind.config.js`에 typography 플러그인 추가
- [ ] 기본 Button 컴포넌트 생성 및 테스트

### 🎯 완료 기준

- 기본 버튼 컴포넌트가 브라우저에서 렌더링
- Typography 스타일이 텍스트에 올바르게 적용

### 💡 핵심 개념

**Headless UI**: 스타일 없이 접근성과 기능만 제공하는 컴포넌트로 디자인 자유도 극대화
**CVA**: Class Variance Authority로 타입 안전한 CSS 변형 관리
**Radix UI**: 접근성 표준을 준수하는 고품질 UI 프리미티브

### 🔗 전체 맥락에서의 위치

**이전**: Next.js 앱 설정 → **현재**: UI 라이브러리 설정 → **다음**: MDX 블로그 구현

### ⚠️ 주의사항

- 설치 후 반드시 브라우저에서 동작 확인
- Tailwind IntelliSense 확장이 설치되어 있는지 확인

### 🔗 실무 적용 포인트

실제 프로덕션에서는 이런 UI 라이브러리 조합이 디자인 시스템의 기초가 됨

### 📚 확장 학습 링크

- [Radix UI 공식 문서](https://www.radix-ui.com/)
- [CVA 사용법](https://cva.style/docs)

### 🤔 체크포인트 질문

1. Headless UI가 일반 UI 라이브러리와 다른 점은?
2. CVA를 사용하는 이유는?

## Step 1.4: 기본 레이아웃 및 다크모드 구현

### 🎯 학습 목표

- 재사용 가능한 레이아웃 컴포넌트 구조 이해
- Next.js App Router의 레이아웃 시스템 활용
- 다크모드 상태 관리 및 퍼시스턴스 구현

### ⏱ 예상 소요시간: 45분

### ✅ 액션 아이템

- [ ] 기본 Header, Footer, Navigation 컴포넌트 생성
- [ ] 다크모드 토글 기능 구현 (로컬스토리지 연동)
- [ ] 레이아웃 컴포넌트를 `app/layout.tsx`에 적용
- [ ] 반응형 디자인 기본 설정 확인

### 🎯 완료 기준

- 다크모드 토글 버튼 클릭 시 테마 전환 동작
- 새로고침 후에도 선택한 테마 유지
- 모바일/데스크톱에서 레이아웃 정상 표시

### 💡 핵심 개념

**Layout System**: Next.js App Router의 중첩 레이아웃으로 코드 재사용성 극대화
**Theme Provider**: React Context를 활용한 전역 상태 관리

### 🔗 전체 맥락에서의 위치

**이전**: UI 라이브러리 설정 → **현재**: 레이아웃 구현 → **다음**: MDX 블로그 구현

### ⚠️ 주의사항

- 다크모드 깜빡임 방지를 위한 초기 로딩 처리 필요
- 시스템 테마 감지 기능도 고려

## Step 1.5: MDX 블로그 시스템 구축

### 🎯 학습 목표

- 파일 기반 라우팅과 동적 라우팅 이해
- MDX 파일 시스템 설계 및 메타데이터 처리
- 정적 사이트 생성(SSG) 개념 적용

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] `content/posts/` 디렉터리 구조 생성
- [ ] 샘플 MDX 포스트 3-5개 작성
- [ ] `app/posts/[slug]/page.tsx` 동적 라우팅 구현
- [ ] 포스트 목록 페이지 (`app/posts/page.tsx`) 구현
- [ ] 메인 페이지에 최신 포스트 표시

### 🎯 완료 기준

- MDX 포스트가 브라우저에서 올바르게 렌더링
- 코드 블록 하이라이팅 정상 동작
- 포스트 간 네비게이션 정상 작동

### 💡 핵심 개념

**Dynamic Routing**: `[slug]` 형태로 동적 URL 생성
**Static Generation**: 빌드 타임에 HTML 생성으로 성능 최적화
**Frontmatter**: MDX 파일 상단의 메타데이터 영역

### 🔗 전체 맥락에서의 위치

**이전**: 레이아웃 구현 → **현재**: MDX 블로그 시스템 → **다음**: Vercel 배포

### ⚠️ 주의사항

- 포스트 슬러그는 URL-safe한 형태로 생성
- 메타데이터 파싱 에러 처리 필요

### 🔗 실무 적용 포인트

실제 블로그나 문서 사이트에서 널리 사용되는 패턴

### 🤔 체크포인트 질문

1. 정적 생성과 서버 사이드 렌더링의 차이점은?
2. MDX가 일반 Markdown보다 유용한 상황은?

## Step 1.6: Vercel 배포 및 최적화

### 🎯 학습 목표

- 클라우드 배포 프로세스 경험
- 프로덕션 환경 설정 이해
- 성능 최적화 기본 사항 적용

### ⏱ 예상 소요시간: 30분

### ✅ 액션 아이템

- [ ] Vercel CLI 설치 (`npm install -g vercel`)
- [ ] 프로젝트를 Vercel에 배포 (`vercel --prod`)
- [ ] 커스텀 도메인 연결 (선택사항)
- [ ] Lighthouse 성능 측정 실행

### 🎯 완료 기준

- 실제 URL로 접근 가능한 블로그 사이트
- Lighthouse 성능 점수 80+ 달성
- 모든 페이지가 프로덕션에서 정상 동작

### 💡 핵심 개념

**JAMstack**: JavaScript, APIs, Markup 기반의 현대적 웹 아키텍처
**Edge Network**: 전 세계 CDN을 통한 빠른 콘텐츠 전송

### 🔗 전체 맥락에서의 위치

**이전**: MDX 블로그 시스템 → **현재**: 배포 → **다음**: Week 2 백엔드 개발

### ⚠️ 주의사항

- 환경 변수는 Vercel 대시보드에서 별도 설정
- 빌드 에러 시 로그 확인 필수

### ✅ Week 1 최종 완료 체크리스트

**🚀 필수 성과물**:

- [ ] 실제 접근 가능한 블로그 사이트 (https://your-blog.vercel.app)
- [ ] 3-5개의 실제 MDX 포스트 발행
- [ ] 다크모드 토글 기능 정상 동작
- [ ] 모바일/데스크톱 반응형 디자인 완성

**📊 성능 및 품질**:

- [ ] Lighthouse 성능 점수 80+ 달성
- [ ] 모든 페이지 로딩 속도 2초 이내
- [ ] SEO 메타데이터 기본 설정 완료

**🔧 기술적 역량 확인**:

- [ ] Next.js App Router 구조 이해 (자가평가 7/10 이상)
- [ ] MDX 콘텐츠 작성 능력 확보
- [ ] Vercel 배포 프로세스 완전 숙지
- [ ] 모노레포 구조의 장점 체감

---

## 🛠 Week 2: Express + PostgreSQL 백엔드

### 🎯 Week 2 전체 학습 목표

- Express.js 서버 아키텍처 이해 및 구축
- PostgreSQL + Prisma ORM 활용
- RESTful API 설계 및 구현
- 프론트엔드-백엔드 데이터 연동

## Step 2.1: Express 프로젝트 초기화

### 🎯 학습 목표

- Node.js 백엔드 서버 기초 환경 구축
- Express.js 미들웨어 생태계 이해
- TypeScript 기반 개발 환경 설정

### ⏱ 예상 소요시간: 45분

### ✅ 액션 아이템

- [ ] API 프로젝트 디렉터리 생성 (`mkdir apps/api && cd apps/api`)
- [ ] 핵심 패키지 설치 (`express cors helmet morgan dotenv bcryptjs jsonwebtoken`)
- [ ] 개발 환경 패키지 설치 (`typescript @types/express tsx nodemon`)
- [ ] `tsconfig.json` 및 기본 서버 구조 생성

### 🎯 완료 기준

- Express 서버가 `localhost:3001`에서 정상 실행
- TypeScript 컴파일 에러 없음
- 기본 미들웨어 (CORS, Helmet 등) 적용 확인

### 💡 핵심 개념

**미들웨어 스택**: Express의 핵심으로 요청/응답 처리 파이프라인
**보안 계층**: helmet + cors + rate-limit로 다층 보안 구현

### 🔗 전체 맥락에서의 위치

**이전**: Week 1 완료 → **현재**: 백엔드 기초 → **다음**: 데이터베이스 연동

### ⚠️ 주의사항

- 포트 3001 사용 (프론트엔드와 분리)
- 환경변수 파일 `.env` 생성 필수

## Step 2.2: PostgreSQL + Prisma 설정

### 🎯 학습 목표

- PostgreSQL 데이터베이스 설치 및 기본 설정
- Prisma ORM 도구 이해 및 스키마 설계
- 타입 안전한 데이터베이스 접근 환경 구축

### ⏱ 예상 소요시간: 1시간

### ✅ 액션 아이템

- [ ] PostgreSQL 로컬 설치 (`brew install postgresql`)
- [ ] 개발용 데이터베이스 생성 (`createdb doboblog_dev`)
- [ ] Prisma 설치 및 초기화 (`npm install prisma @prisma/client`)
- [ ] 데이터베이스 스키마 설계 (Post, Tag, Category, User 모델)
- [ ] 첫 번째 마이그레이션 실행

### 🎯 완료 기준

- PostgreSQL 서비스 정상 실행
- Prisma Client 코드 생성 완료
- 기본 테이블들이 데이터베이스에 생성됨

### 💡 핵심 개념

**ORM**: Object-Relational Mapping으로 데이터베이스와 객체 간 매핑
**마이그레이션**: 데이터베이스 스키마 변경을 버전 관리하는 방식
**타입 안전성**: Prisma가 스키마에서 TypeScript 타입을 자동 생성

### 🔗 전체 맥락에서의 위치

**이전**: Express 기초 → **현재**: 데이터베이스 설정 → **다음**: API 구현

### ⚠️ 주의사항

- 데이터베이스 연결 문자열 환경변수 설정 필수
- 마이그레이션 실행 후 반드시 `npx prisma generate` 실행

## Step 2.3: REST API 구현

### 🎯 학습 목표

- RESTful API 설계 원칙 이해
- CRUD 작업을 위한 컨트롤러 구현
- 에러 처리 및 유효성 검사 적용

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] Post CRUD API 엔드포인트 구현 (GET, POST, PUT, DELETE)
- [ ] 기본 에러 처리 미들웨어 추가
- [ ] 유효성 검사 라이브러리 적용 (`express-validator`)
- [ ] Postman으로 API 테스트 수행

### 🎯 완료 기준

- 모든 CRUD 작업이 Postman에서 정상 동작
- 에러 응답이 일관된 형식으로 반환
- 입력 데이터 유효성 검사 통과

### 💡 핵심 개념

**REST**: Representational State Transfer로 HTTP 메서드 기반 API 설계
**Status Code**: HTTP 상태 코드를 통한 명확한 응답 상태 전달
**Validation**: 클라이언트 입력 데이터의 형식 및 내용 검증

### 🔗 전체 맥락에서의 위치

**이전**: 데이터베이스 설정 → **현재**: API 구현 → **다음**: 프론트엔드 연동

### ⚠️ 주의사항

- API 응답 형식을 일관되게 유지
- 민감한 데이터 (비밀번호 등) 응답에서 제외

### 🔗 실무 적용 포인트

실제 프로덕션에서는 이런 API가 모바일 앱, 웹 프론트엔드 등 다양한 클라이언트에서 사용됨

## Step 2.4: 프론트엔드 연동

### 🎯 학습 목표

- React Query를 활용한 서버 상태 관리
- API 클라이언트 라이브러리 구성
- 동적 데이터 표시 및 사용자 인터랙션 구현

### ⏱ 예상 소요시간: 45분

### ✅ 액션 아이템

- [ ] React Query 및 Axios 설치 (`@tanstack/react-query axios`)
- [ ] API 클라이언트 함수 작성 (`lib/api.ts`)
- [ ] 블로그 포스트 목록 페이지를 동적 데이터로 변경
- [ ] 로딩 상태 및 에러 처리 UI 추가

### 🎯 완료 기준

- 데이터베이스의 포스트가 웹사이트에 표시
- 로딩 스피너 및 에러 메시지 정상 동작
- 실시간으로 백엔드와 데이터 동기화

### 💡 핵심 개념

**Server State**: 서버에서 관리되는 상태로 클라이언트 상태와 구분
**React Query**: 서버 상태 관리 및 캐싱을 위한 라이브러리
**API Layer**: 프론트엔드와 백엔드 간 데이터 통신 추상화

### 🔗 전체 맥락에서의 위치

**이전**: API 구현 → **현재**: 프론트엔드 연동 → **다음**: Week 3 인프라

### ⚠️ 주의사항

- CORS 설정이 올바른지 확인
- API 엔드포인트 URL 환경별로 관리

### ✅ Week 2 최종 완료 체크리스트

**🚀 필수 성과물**:

- [ ] 완전한 REST API 서버 구축 (CRUD 지원)
- [ ] PostgreSQL + Prisma 연동 완료
- [ ] 프론트엔드에서 동적 데이터 표시
- [ ] 모노레포에서 멀티 앱 동시 실행 (`turbo dev`)

**📊 기술적 역량 확인**:

- [ ] Express.js 미들웨어 시스템 이해
- [ ] Prisma ORM 기본 활용 능력
- [ ] RESTful API 설계 원칙 숙지
- [ ] React Query 서버 상태 관리 경험

**📋 문서화 및 정리**:

- [ ] API 문서화 (Postman Collection 생성)
- [ ] 환경변수 설정 가이드 작성

---

## 🐳 Week 3: Docker + AWS 클라우드

### 🎯 Week 3 전체 학습 목표

- Docker 컨테이너 기술 이해 및 활용
- AWS 클라우드 서비스 실전 경험
- 실제 프로덕션 환경 구축
- 도메인 및 HTTPS 설정

## Step 3.1: Docker 환경 구축

### 🎯 학습 목표

- 컨테이너 기술과 Docker 기본 개념 이해
- 멀티 스테이지 빌드와 최적화 전략 학습
- Docker Compose를 활용한 서비스 오케스트레이션

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] Docker 설치 및 기본 명령어 학습
- [ ] 프론트엔드용 Dockerfile 작성 (`apps/web/Dockerfile`)
- [ ] 백엔드용 Dockerfile 작성 (`apps/api/Dockerfile`)
- [ ] Docker Compose 파일 구성 (web, api, db 서비스)
- [ ] 로컬 컨테이너 환경에서 전체 스택 실행

### 🎯 완료 기준

- `docker-compose up`으로 전체 서비스 실행 성공
- 컨테이너 간 네트워크 통신 정상 확인
- 데이터베이스 볼륨 마운트 동작 확인

### 💡 핵심 개념

**컨테이너**: 애플리케이션과 환경을 패키징한 실행 단위
**이미지 레이어**: Docker 이미지의 계층 구조로 효율적 저장
**오케스트레이션**: 여러 컨테이너를 조합해 서비스 구성

### 🔗 전체 맥락에서의 위치

**이전**: Week 2 완료 → **현재**: 컨테이너화 → **다음**: AWS 배포

### ⚠️ 주의사항

- 멀티 스테이지 빌드로 이미지 크기 최적화
- 환경변수를 통한 설정 외부화

## Step 3.2: AWS 인프라 구축

### 🎯 학습 목표

- AWS 기본 서비스 (EC2, RDS) 이해
- 클라우드 보안 및 네트워킹 기초 학습
- 실제 프로덕션 환경 설정 경험

### ⏱ 예상 소요시간: 2시간

### ✅ 액션 아이템

- [ ] AWS 계정 생성 및 CLI 설정
- [ ] EC2 인스턴스 생성 (Ubuntu 22.04, t3.micro)
- [ ] 보안 그룹 설정 (SSH, HTTP, HTTPS, 커스텀 포트)
- [ ] RDS PostgreSQL 인스턴스 생성
- [ ] SSH로 서버 접속 및 기본 환경 설정

### 🎯 완료 기준

- EC2 인스턴스에 SSH 접속 성공
- RDS 데이터베이스 연결 확인
- 기본 보안 설정 완료

### 💡 핵심 개념

**IaaS**: Infrastructure as a Service로 가상화된 컴퓨팅 리소스 제공
**Security Group**: AWS의 가상 방화벽으로 트래픽 제어
**VPC**: 가상 사설 클라우드로 네트워크 격리

### 🔗 전체 맥락에서의 위치

**이전**: 컨테이너화 → **현재**: AWS 인프라 → **다음**: 배포 자동화

### ⚠️ 주의사항

- 프리티어 범위 내에서 리소스 생성
- SSH 키 페어 안전하게 보관

## Step 3.3: 프로덕션 배포

### 🎯 학습 목표

- 실제 서버에 애플리케이션 배포 경험
- 도메인 연결 및 HTTPS 설정 이해
- 기본 서버 운영 및 모니터링 학습

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] EC2에 Docker 및 Git 설치
- [ ] 프로젝트 클론 및 환경변수 설정
- [ ] Docker Compose로 프로덕션 배포
- [ ] 도메인 연결 (Route 53 또는 외부 도메인)
- [ ] Let's Encrypt로 HTTPS 설정

### 🎯 완료 기준

- 실제 도메인으로 웹사이트 접속 가능
- HTTPS 인증서 정상 동작
- 데이터베이스 연결 및 API 동작 확인

### 💡 핵심 개념

**DNS**: Domain Name System으로 도메인-IP 매핑
**SSL/TLS**: 암호화 통신을 위한 보안 프로토콜
**Reverse Proxy**: 클라이언트 요청을 백엔드 서버로 중계

### 🔗 전체 맥락에서의 위치

**이전**: AWS 인프라 → **현재**: 프로덕션 배포 → **다음**: Week 4 자동화

### ⚠️ 주의사항

- SSL 인증서 자동 갱신 설정
- 방화벽 및 보안 설정 점검

### ✅ Week 3 최종 완료 체크리스트

**🚀 필수 성과물**:

- [ ] AWS 클라우드에 배포된 풀스택 서비스
- [ ] 실제 도메인 연결 완료
- [ ] HTTPS 보안 연결 적용
- [ ] Docker 컨테이너 기반 운영

**📊 기술적 역량 확인**:

- [ ] Docker 기본 명령어 및 Dockerfile 작성 능력
- [ ] AWS 기본 서비스 (EC2, RDS) 활용 경험
- [ ] 클라우드 보안 및 네트워킹 기초 이해
- [ ] 리눅스 서버 기본 운영 능력

---

## ⚙️ Week 4: CI/CD + 고급 기능

### 🎯 Week 4 전체 학습 목표

- GitHub Actions CI/CD 파이프라인 구축
- 자동화된 배포 프로세스 구현
- JWT 인증 시스템 구축
- 프로덕션 모니터링 설정

## Step 4.1: GitHub Actions 설정

### 🎯 학습 목표

- CI/CD 개념과 GitHub Actions 생태계 이해
- YAML 기반 워크플로우 작성 및 최적화
- 환경별 배포 전략과 시크릿 관리

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] GitHub Actions 워크플로우 파일 생성 (`.github/workflows/ci.yml`)
- [ ] 자동 빌드 및 테스트 파이프라인 구성
- [ ] 자동 배포 스크립트 작성 (main 브랜치 push 시)
- [ ] GitHub Secrets에 환경변수 설정 (AWS 키, DB URL 등)

### 🎯 완료 기준

- 코드 push 시 자동 빌드/테스트 실행
- main 브랜치 merge 시 자동 배포 동작
- 배포 실패 시 알림 및 롤백 가능

### 💡 핵심 개념

**CI/CD**: 지속적 통합/배포로 코드 변경사항을 자동으로 검증하고 배포
**Pipeline as Code**: 배포 과정을 코드로 관리하여 버전 관리 및 재현 가능
**Environment Secrets**: 민감한 정보를 안전하게 관리하는 방식

### 🔗 전체 맥락에서의 위치

**이전**: Week 3 완료 → **현재**: 배포 자동화 → **다음**: 고급 기능

### ⚠️ 주의사항

- 프로덕션 키는 절대 코드에 하드코딩 금지
- 배포 실패 시 빠른 롤백 전략 필요

## Step 4.2: 인증 시스템 구현

### 🎯 학습 목표

- JWT 기반 인증/인가 시스템 구현
- 보안 미들웨어 및 토큰 관리 이해
- 프론트엔드 인증 상태 관리

### ⏱ 예상 소요시간: 1.5시간

### ✅ 액션 아이템

- [ ] JWT 토큰 생성/검증 미들웨어 구현
- [ ] 사용자 로그인/회원가입 API 구현
- [ ] 보호된 라우트 및 권한 검사 추가
- [ ] 프론트엔드 인증 상태 관리 (Context API 또는 Zustand)

### 🎯 완료 기준

- 로그인/회원가입 기능 정상 동작
- JWT 토큰으로 API 보호 확인
- 권한이 없는 사용자의 접근 차단

### 💡 핵심 개념

**JWT**: JSON Web Token으로 상태 없는 인증 방식
**Authorization**: 인증된 사용자의 권한 검사
**Token Refresh**: 액세스 토큰 갱신을 통한 보안 강화

### 🔗 전체 맥락에서의 위치

**이전**: 배포 자동화 → **현재**: 인증 시스템 → **다음**: 모니터링

### ⚠️ 주의사항

- 비밀번호는 반드시 해시화하여 저장
- JWT 시크릿은 충분히 복잡하게 설정

## Step 4.3: 모니터링 및 최적화

### 🎯 학습 목표

- 프로덕션 모니터링 도구 설정
- 성능 최적화 기법 적용
- 에러 추적 및 로깅 시스템 구축

### ⏱ 예상 소요시간: 1시간

### ✅ 액션 아이템

- [ ] AWS CloudWatch 기본 모니터링 설정
- [ ] 애플리케이션 로깅 시스템 구축
- [ ] 성능 최적화 (이미지 최적화, 캐싱, DB 인덱스)
- [ ] 에러 추적 도구 연동 (Sentry 등)

### 🎯 완료 기준

- 서버 리소스 모니터링 대시보드 확인
- 애플리케이션 에러 실시간 추적 가능
- 페이지 로딩 속도 90점 이상 달성

### 💡 핵심 개념

**Observability**: 시스템의 내부 상태를 외부에서 관찰 가능하게 하는 능력
**APM**: Application Performance Monitoring으로 앱 성능 추적
**SLA**: Service Level Agreement로 서비스 품질 약속

### 🔗 전체 맥락에서의 위치

**이전**: 인증 시스템 → **현재**: 모니터링 → **다음**: 프로젝트 완료

### ⚠️ 주의사항

- 로그에 민감한 정보 포함하지 않기
- 모니터링 비용 최적화 고려

### ✅ Week 4 최종 완료 체크리스트

**🚀 필수 성과물**:

- [ ] 완전 자동화된 CI/CD 파이프라인
- [ ] JWT 기반 인증 시스템 완성
- [ ] 프로덕션 모니터링 설정 완료
- [ ] 포트폴리오급 풀스택 서비스 운영

**📊 기술적 역량 확인**:

- [ ] GitHub Actions 워크플로우 작성 능력
- [ ] JWT 인증/인가 시스템 구현 경험
- [ ] AWS CloudWatch 모니터링 설정 능력
- [ ] 성능 최적화 및 문제 해결 경험

---

## 🎯 최종 성과물 체크리스트

### ✅ 기술 스택 완성도

- [ ] **프론트엔드**: Next.js 14 + MDX + Tailwind CSS
- [ ] **백엔드**: Express + PostgreSQL + Prisma
- [ ] **인프라**: Docker + AWS (EC2, RDS, S3)
- [ ] **CI/CD**: GitHub Actions 자동화
- [ ] **모노레포**: Turborepo 구조

### ✅ 기능 완성도

- [ ] **정적 콘텐츠**: MDX 기반 블로그 포스트
- [ ] **동적 콘텐츠**: 데이터베이스 기반 포스트 관리
- [ ] **인증**: JWT 기반 관리자 시스템
- [ ] **검색**: 포스트 검색 기능
- [ ] **관리**: 관리자 대시보드

### ✅ 운영 완성도

- [ ] **배포**: 실제 도메인 + HTTPS
- [ ] **모니터링**: CloudWatch 기반 모니터링
- [ ] **자동화**: 코드 push → 자동 배포
- [ ] **보안**: 프로덕션 레벨 보안 설정

### 📚 확장 학습 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

**🎉 축하합니다! 완전한 풀스택 개발자 역량을 갖추셨습니다!**

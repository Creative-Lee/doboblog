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

## 🚀 Week 1: Quick Win - Next.js MDX 블로그

### 🎯 학습 목표

- [ ] Turborepo 모노레포 구조 이해
- [ ] Next.js 14 App Router 기본 숙지
- [ ] MDX 기반 컨텐츠 관리 시스템 구축
- [ ] Vercel 배포 프로세스 경험

### 📋 Day 1-2: 프로젝트 초기 설정 (3시간)

#### 🎯 학습 목표

**이 스텝의 목적**: 모던 풀스택 개발의 기초가 되는 모노레포 구조와 Next.js 환경을 이해
**핵심 학습 포인트**:

- Turborepo 모노레포 개념과 멀티 패키지 관리
- Next.js 14 App Router 아키텍처
- TypeScript + Tailwind CSS 통합 개발환경
  **예상 소요시간**: 총 3시간 (Day 1: 1.5시간, Day 2: 1.5시간)

#### 🔧 1단계: 프로젝트 환경 준비 (30분)

**목적**: 기존 작업 보호 및 새로운 모노레포 구조 생성

```bash
# 1. 기존 프로젝트 백업 (5분)
# 왜 하는가: 기존 작업물 보존, 롤백 가능성 확보
mv doboblog doboblog-backup

# 2. Turborepo 초기화 (10분)
# Turborepo란: 여러 패키지를 효율적으로 관리하는 모노레포 도구
# 장점: 빌드 캐싱, 병렬 실행, 코드 공유
npx create-turbo@latest doboblog
cd doboblog

# 3. 생성된 구조 확인 (5분)
ls -la
# 예상 결과: apps/, packages/, turbo.json, package.json 등
```

**학습 포인트**:

- **모노레포**: 여러 앱이 하나의 저장소에서 관리되는 구조
- **Turborepo**: 빌드 성능 최적화와 의존성 관리 도구

#### 📁 2단계: 프로젝트 구조 이해 및 설계 (30분)

**목적**: 모노레포 구조 이해와 확장 가능한 아키텍처 설계

```
doboblog/
├── apps/                 # 실행 가능한 애플리케이션들
│   ├── web/              # Next.js 프론트엔드 (Week 1)
│   └── api/              # Express 백엔드 (Week 2)
├── packages/             # 공유 패키지들
│   ├── ui/               # 재사용 가능한 UI 컴포넌트
│   ├── typescript-config/ # 공통 TypeScript 설정
│   └── eslint-config/    # 공통 ESLint 규칙
├── turbo.json            # Turborepo 빌드 파이프라인 설정
└── package.json          # 루트 의존성 및 워크스페이스 정의
```

**학습 포인트**:

- **apps/**: 독립적으로 배포 가능한 애플리케이션
- **packages/**: 여러 앱에서 공유하는 라이브러리
- **워크스페이스**: npm/yarn의 멀티 패키지 관리 방식

#### ⚙️ 3단계: Next.js 앱 생성 및 설정 (1시간)

**목적**: 최신 Next.js 환경과 App Router 아키텍처 이해
**핵심 개념**: App Router, TypeScript, Tailwind CSS 통합

```bash
# Next.js 앱 생성 (20분)
cd apps
npx create-next-app@latest web --typescript --tailwind --app --import-alias "@/*"

# 명령어 옵션 설명:
# --typescript: TypeScript 템플릿 사용 (타입 안정성)
# --tailwind: Tailwind CSS 자동 설정 (유틸리티 기반 CSS)
# --app: App Router 사용 (Next.js 13+ 새로운 라우팅 시스템)
# --import-alias "@/*": 절대 경로 import 설정 (../../../ 방지)
```

**Next.js MDX 설정 (20분)**:

```javascript
// apps/web/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true, // Rust 기반 MDX 컴파일러 (빠른 빌드)
  },
};

// MDX 지원을 위한 플러그인 적용
const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
```

**설정 설명**:

- **MDX**: Markdown + JSX 조합으로 컴포넌트가 포함된 콘텐츠 작성 가능
- **mdxRs**: Rust 기반 컴파일러로 빌드 성능 향상

#### 🎨 4단계: UI 라이브러리 및 스타일 설정 (1시간)

**목적**: 현대적 UI 개발을 위한 도구 체인 구축
**핵심 학습**: Radix UI (접근성), Lucide (아이콘), CVA (스타일 변형)

```bash
# 1. UI 컴포넌트 라이브러리 설치 (15분)
cd apps/web
npm install @radix-ui/react-slot @radix-ui/react-dropdown-menu
npm install lucide-react clsx tailwind-merge
npm install class-variance-authority

# 패키지 설명:
# @radix-ui/*: 접근성이 뛰어난 Headless UI 컴포넌트
# lucide-react: 일관되고 현대적인 아이콘 라이브러리
# clsx: 조건부 className 결합 유틸리티
# tailwind-merge: Tailwind 클래스 충돌 해결
# class-variance-authority: 타입 안전한 CSS 변형 관리
```

**tailwind.config.js 확장:**

```javascript
module.exports = {
  plugins: [require('@tailwindcss/typography')],
};
```

#### ✅ Day 1-2 완료 체크리스트 (총 3시간)

**🔧 환경 설정 완료 확인**:

- [ ] Turborepo 모노레포 구조 생성 및 `turbo dev` 명령어 실행 확인
- [ ] Next.js 14 + TypeScript 환경 구성 및 `http://localhost:3000` 접속 확인
- [ ] Tailwind CSS + Typography 플러그인 설정 및 스타일 적용 테스트
- [ ] Radix UI + Lucide React 설치 및 기본 컴포넌트 렌더링 확인

**🎨 기본 UI 구현 완료 확인**:

- [ ] 기본 레이아웃 컴포넌트 (Header, Footer, Navigation) 생성
- [ ] 다크모드 토글 기능 구현 및 동작 확인
- [ ] 반응형 디자인 기본 설정 (모바일/데스크톱 확인)

**📝 MDX 기본 설정 완료 확인**:

- [ ] @next/mdx 설정 및 .mdx 파일 렌더링 확인
- [ ] 코드 하이라이팅 기능 테스트

**🧩 문제 해결 능력 점검**:

- [ ] 패키지 설치 오류 시 해결 방법 숙지
- [ ] 포트 충돌 해결 방법 이해 (`lsof -i :3000`)
- [ ] Git 커밋 및 브랜치 관리 기본 숙지

### 📋 Day 3-4: MDX 블로그 구현 (3시간)

#### 🎯 학습 목표

**이 스텝의 목적**: 정적 사이트 생성과 파일 기반 라우팅 시스템 이해
**핵심 학습 포인트**:

- MDX를 활용한 컨텐츠 관리 시스템
- Next.js App Router의 동적 라우팅
- 정적 사이트 생성 (SSG)과 메타데이터 처리
  **예상 소요시간**: 총 3시간 (Day 3: 1.5시간, Day 4: 1.5시간)

#### 📝 1단계: MDX 환경 구축 및 컨텐츠 시스템 (1시간)

**목적**: Markdown과 React 컴포넌트를 결합한 강력한 컨텐츠 작성 환경 구축
**핵심 개념**: MDX, 코드 하이라이팅, 타이포그래피

```bash
# 1. MDX 핵심 패키지 설치 (10분)
cd apps/web
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install @tailwindcss/typography
npm install prismjs react-syntax-highlighter

# 패키지 역할 설명:
# @next/mdx: Next.js와 MDX 통합 플러그인
# @mdx-js/loader: MDX 파일을 JavaScript로 변환
# @mdx-js/react: React 컴포넌트에서 MDX 사용
# @tailwindcss/typography: 아름다운 기본 타이포그래피 스타일
# prismjs: 코드 블록 문법 하이라이팅
# react-syntax-highlighter: React용 코드 하이라이팅 컴포넌트
```

**apps/web/content/ 구조:**

```
content/
├── posts/
│   ├── hello-world.mdx
│   ├── next-js-guide.mdx
│   └── index.ts
└── pages/
    ├── about.mdx
    └── index.ts
```

#### 🔗 동적 라우팅 구현 (1시간)

**apps/web/app/posts/[slug]/page.tsx:**

```typescript
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className='prose dark:prose-invert max-w-none'>
      <h1>{post.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}
```

#### 🎯 핵심 페이지 구현 (1시간)

1. **메인 페이지** (`app/page.tsx`) - 최신 포스트 목록
2. **포스트 목록** (`app/posts/page.tsx`) - 전체 포스트
3. **소개 페이지** (`app/about/page.tsx`) - MDX 기반

#### ✅ Day 3-4 체크리스트

- [ ] MDX 설정 및 컨텐츠 파일 시스템 구축
- [ ] 동적 라우팅으로 포스트 상세 페이지 구현
- [ ] 코드 하이라이팅 (highlight.js) 적용
- [ ] 메타데이터 및 SEO 기본 설정
- [ ] 3-5개 샘플 포스트 작성

### 📋 주말: 배포 및 개선 (2시간)

#### 🚀 Vercel 배포 (30분)

```bash
# Vercel CLI 설치 및 배포
npm install -g vercel
vercel --prod
```

#### 🌐 도메인 및 SEO 설정 (1시간)

- Vercel 대시보드에서 커스텀 도메인 연결
- Google Search Console 등록
- sitemap.xml 자동 생성 설정

#### 📱 반응형 및 성능 최적화 (30분)

- 모바일 반응형 디자인 점검
- Lighthouse 성능 측정 및 개선
- 이미지 최적화 (next/image)

#### ✅ Week 1 최종 성과 체크리스트 - 🎉 첫 번째 마일스톤!

**🚀 배포 성공 확인 (필수)**:

- [ ] ✅ **실제 접근 가능한 블로그 사이트** (https://your-blog.vercel.app)
- [ ] Vercel 배포 성공 및 자동 빌드 확인
- [ ] 도메인 연결 (Vercel 기본 도메인 또는 커스텀 도메인)
- [ ] HTTPS 보안 연결 확인

**📱 사용자 경험 완성도**:

- [ ] 모바일/태블릿/데스크톱 반응형 디자인 정상 동작
- [ ] 다크모드 토글 기능 및 테마 유지 기능
- [ ] 페이지 로딩 속도 최적화 (Lighthouse 점수 90+ 목표)
- [ ] 기본 SEO 메타데이터 설정 (title, description, OG tags)

**📝 콘텐츠 시스템 검증**:

- [ ] MDX 파일 기반 포스트 작성 및 렌더링 확인
- [ ] 코드 블록 하이라이팅 정상 동작
- [ ] 이미지 최적화 및 표시 확인
- [ ] **3-5개 실제 포스트 발행** (기술 학습 내용 정리 추천)

**🔗 내비게이션 및 구조**:

- [ ] 메인 페이지 → 포스트 목록 → 개별 포스트 이동 경로 확인
- [ ] 헤더/푸터 네비게이션 정상 동작
- [ ] 404 페이지 커스터마이징 완료

**📊 성과 측정**:

- [ ] **주변 사람들에게 블로그 링크 공유** (실제 사용자 피드백)
- [ ] Google Search Console 등록 (검색 엔진 노출 준비)
- [ ] Vercel Analytics 연동 (방문자 추적)

**🎯 Week 1 학습 성과 확인**:

- [ ] Next.js App Router 구조 이해도 자가 평가 (1-10점)
- [ ] MDX 콘텐츠 작성 능력 확보
- [ ] Vercel 배포 프로세스 완전 이해
- [ ] 모노레포 구조의 장점 체감

**💪 다음 주 준비도**:

- [ ] Week 2 백엔드 개발을 위한 동기 부여 확인
- [ ] PostgreSQL 로컬 설치 계획 수립

---

## 🛠 Week 2: Backend 기초 - Express + PostgreSQL

### 🎯 학습 목표

- [ ] Express.js 서버 아키텍처 이해
- [ ] PostgreSQL + Prisma ORM 활용
- [ ] RESTful API 설계 및 구현
- [ ] 프론트엔드-백엔드 데이터 연동

### 📋 Day 1-2: Express 서버 구성 (3시간)

#### 🎯 학습 목표

**이 스텝의 목적**: 현대적인 Node.js 백엔드 서버 아키텍처 이해
**핵심 학습 포인트**:

- Express.js 미들웨어 생태계와 보안
- TypeScript 기반 백엔드 개발 환경
- RESTful API 설계 원칙과 라우터 구조
  **예상 소요시간**: 총 3시간 (Day 1: 1.5시간, Day 2: 1.5시간)

#### 🏗 1단계: Express 프로젝트 초기화 및 의존성 설치 (30분)

**목적**: 보안성과 확장성을 고려한 백엔드 프로젝트 기반 구축
**핵심 개념**: Express 미들웨어, 보안, TypeScript 환경

```bash
# 1. API 프로젝트 디렉토리 생성 (5분)
mkdir apps/api && cd apps/api
npm init -y

# 2. 핵심 런타임 패키지 설치 (10분)
npm install express cors helmet morgan dotenv
npm install bcryptjs jsonwebtoken express-rate-limit

# 3. 개발 환경 패키지 설치 (10분)
npm install -D typescript @types/express @types/cors @types/node
npm install -D @types/bcryptjs @types/jsonwebtoken tsx nodemon

# 패키지 역할 상세 설명:
# === 런타임 패키지 ===
# express: Node.js 웹 프레임워크 (라우팅, 미들웨어)
# cors: Cross-Origin Resource Sharing 설정 (브라우저 보안정책)
# helmet: HTTP 헤더 보안 강화 (XSS, CSP 등)
# morgan: HTTP 요청 로깅 (개발/운영 모니터링)
# dotenv: 환경변수 파일(.env) 로드
# bcryptjs: 비밀번호 해싱 (bcrypt의 순수 JS 구현)
# jsonwebtoken: JWT 토큰 생성/검증 (인증/인가)
# express-rate-limit: API 호출 제한 (DDoS 방지)

# === 개발환경 패키지 ===
# typescript: 타입 안전성과 개발자 경험 향상
# @types/*: TypeScript 타입 정의
# tsx: TypeScript 런타임 실행기 (ts-node 대체)
# nodemon: 파일 변경 감지 후 자동 재시작
```

**학습 포인트**:

- **미들웨어 스택**: Express의 핵심 개념으로 요청/응답 처리 파이프라인
- **보안 계층**: helmet + cors + rate-limit로 다층 보안 구현
- **개발 환경**: TypeScript + 핫 리로드로 생산성 극대화

#### ⚙️ TypeScript 환경 구성 (30분)

**apps/api/tsconfig.json:**

```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### 🔧 기본 서버 구조 (1시간)

```typescript
// src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// 미들웨어
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// 라우트
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

export default app;
```

#### 🛣 라우트 구조 설계 (1시간)

```
src/
├── routes/
│   ├── posts.ts
│   ├── auth.ts
│   └── index.ts
├── controllers/
│   ├── PostController.ts
│   └── AuthController.ts
├── middleware/
│   ├── auth.ts
│   └── validation.ts
├── types/
│   └── index.ts
└── app.ts
```

#### ✅ Day 1-2 체크리스트

- [ ] Express 서버 기본 구조 완성
- [ ] TypeScript 환경 구성
- [ ] CORS, Helmet 등 기본 미들웨어 설정
- [ ] 라우터 구조 설계
- [ ] API 엔드포인트 스켈레톤 구현

### 📋 Day 3-4: PostgreSQL + Prisma (3시간)

#### 🗄 PostgreSQL 설정 (30분)

```bash
# 로컬 PostgreSQL 설치 (macOS)
brew install postgresql
brew services start postgresql

# 데이터베이스 생성
createdb doboblog_dev
```

#### 🔧 Prisma 설정 (1시간)

```bash
# Prisma 설치
npm install prisma @prisma/client zod
npm install express-validator
npx prisma init
```

**prisma/schema.prisma:**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Post {
  id          String   @id @default(cuid())
  title       String
  content     String
  excerpt     String?
  slug        String   @unique
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  tags        Tag[]
  categories  Category[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}

model Category {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}

model User {
  id       String @id @default(cuid())
  email    String @unique
  password String
  name     String?
  role     Role   @default(USER)
}

enum Role {
  USER
  ADMIN
}
```

#### 🔨 CRUD API 구현 (1.5시간)

**controllers/PostController.ts:**

```typescript
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export class PostController {
  static async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await prisma.post.findMany({
        where: { published: true },
        include: { tags: true, categories: true },
        orderBy: { createdAt: 'desc' },
      });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }

  static async getPostBySlug(req: Request, res: Response) {
    const { slug } = req.params;
    try {
      const post = await prisma.post.findUnique({
        where: { slug },
        include: { tags: true, categories: true },
      });
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  }

  // createPost, updatePost, deletePost...
}
```

#### 🔧 환경변수 설정

**.env (apps/api 폴더에 생성):**

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/doboblog_dev"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"

# AWS (나중에 사용)
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION="ap-northeast-2"
S3_BUCKET_NAME=""
```

#### ✅ Day 3-4 체크리스트

- [ ] PostgreSQL 로컬 설치 및 DB 생성
- [ ] Prisma 스키마 설계 및 마이그레이션
- [ ] Post, Tag, Category, User 모델 구현
- [ ] 기본 CRUD API 완성
- [ ] 환경변수 설정 완료
- [ ] Postman으로 API 테스트 완료

### 📋 주말: 프론트엔드 연동 (2시간)

#### 🔗 API 클라이언트 설정 (30분)

```bash
# web 앱에 React Query 및 Axios 설치
cd apps/web
npm install @tanstack/react-query axios
```

**lib/api.ts:**

```typescript
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export const api = {
  posts: {
    getAll: () => apiClient.get('/api/posts').then(res => res.data),
    getBySlug: (slug: string) => apiClient.get(`/api/posts/${slug}`).then(res => res.data),
  },
};
```

**app/providers.tsx (React Query Provider):**

```typescript
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5분
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

**app/layout.tsx 업데이트:**

```typescript
import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

#### 📊 동적 데이터 표시 (1시간)

```typescript
// app/blog/page.tsx - 동적 포스트 목록
'use client';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export default function BlogPage() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: api.posts.getAll,
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts?.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

#### 🔄 Turbo 스크립트 설정 (30분)

**turbo.json:**

```json
{
  "pipeline": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    }
  }
}
```

#### ✅ Week 2 최종 체크리스트

- [ ] ✅ 완전한 REST API 서버 구축
- [ ] PostgreSQL + Prisma 연동
- [ ] 프론트엔드에서 동적 데이터 표시
- [ ] 모노레포에서 멀티 앱 동시 실행
- [ ] API 문서화 (Postman Collection)

---

## 🐳 Week 3: 인프라 기초 - Docker + AWS

### 🎯 학습 목표

- [ ] Docker 컨테이너 기술 이해 및 활용
- [ ] AWS 클라우드 서비스 실전 경험
- [ ] 실제 프로덕션 환경 구축
- [ ] 도메인 및 HTTPS 설정

### 📋 Day 1-2: Docker 환경 (3시간)

#### 🎯 학습 목표

**이 스텝의 목적**: 컨테이너 기술과 애플리케이션 격리 환경 이해
**핵심 학습 포인트**:

- Docker 컨테이너와 이미지 개념
- 멀티 스테이지 빌드와 최적화 전략
- Docker Compose를 활용한 서비스 오케스트레이션
  **예상 소요시간**: 총 3시간 (Day 1: 1.5시간, Day 2: 1.5시간)

#### 🐳 1단계: Docker 핵심 개념 및 기본 명령어 (1시간)

**목적**: 컨테이너 기술의 핵심 원리와 Docker 생태계 이해
**핵심 개념**: 이미지/컨테이너, 레이어, 격리환경

```bash
# 1. Docker 설치 및 환경 확인 (10분)
docker --version          # Docker 엔진 버전 확인
docker-compose --version  # Docker Compose 버전 확인

# 2. 기본 명령어 실습 및 개념 이해 (30분)
docker pull node:18-alpine  # 이미지 다운로드 (경량 Node.js)
docker run hello-world       # 첫 컨테이너 실행

# 3. 핵심 명령어 학습 (20분)
docker images               # 로컬 이미지 목록 확인
docker ps                   # 실행 중인 컨테이너 확인
docker ps -a               # 모든 컨테이너 확인 (중지된 것 포함)
docker logs [container_id]  # 컨테이너 로그 확인
docker exec -it [container] bash  # 컨테이너 내부 접속

# 명령어 상세 설명:
# docker pull: 레지스트리에서 이미지 다운로드
# docker run: 이미지로부터 새 컨테이너 생성 및 실행
# docker images: 로컬에 저장된 이미지 목록
# docker ps: 프로세스 상태 확인 (컨테이너는 격리된 프로세스)
# docker logs: 컨테이너의 stdout/stderr 출력 확인
# docker exec: 실행 중인 컨테이너에서 명령 실행
```

**학습 포인트**:

- **이미지 vs 컨테이너**: 클래스와 인스턴스 관계 (이미지=설계도, 컨테이너=실행체)
- **레이어 시스템**: 이미지는 읽기 전용 레이어들의 조합, 변경사항은 새 레이어로 추가
- **격리환경**: 프로세스, 파일시스템, 네트워크가 호스트와 분리된 환경
- **alpine**: 보안과 크기에 최적화된 리눅스 배포판 (5MB 수준)

#### 📦 프론트엔드 Dockerfile (30분)

**apps/web/Dockerfile:**

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### 🗄 백엔드 Dockerfile (30분)

**apps/api/Dockerfile:**

```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/index.js"]
```

#### 🔧 Docker Compose 구성 (1시간)

**docker-compose.yml:**

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: apps/web/Dockerfile
    ports:
      - '3000:3000'
    environment:
      - NEXT_PUBLIC_API_URL=http://api:3001
    depends_on:
      - api

  api:
    build:
      context: .
      dockerfile: apps/api/Dockerfile
    ports:
      - '3001:3001'
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/doboblog
      - JWT_SECRET=your-secret
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=doboblog
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres_data:
```

#### ✅ Day 1-2 체크리스트

- [ ] Docker 기본 명령어 숙지
- [ ] 프론트엔드/백엔드 Dockerfile 작성
- [ ] Docker Compose로 전체 스택 구성
- [ ] 로컬 컨테이너 환경에서 서비스 실행 성공

### 📋 Day 3-4: AWS 기초 배포 (3시간)

#### ☁️ AWS 계정 및 기본 설정 (30분)

```bash
# AWS CLI 설치 및 구성
brew install awscli
aws configure

# 필요한 권한 확인
# - EC2 Full Access
# - RDS Full Access
# - S3 Full Access
# - Route53 Full Access
```

#### 🖥 EC2 인스턴스 생성 (1시간)

1. **AMI 선택**: Ubuntu Server 22.04 LTS
2. **인스턴스 타입**: t3.micro (프리티어)
3. **보안 그룹 설정**:
   ```
   SSH (22) - 내 IP만
   HTTP (80) - 0.0.0.0/0
   HTTPS (443) - 0.0.0.0/0
   Custom (3000) - 0.0.0.0/0
   Custom (3001) - 0.0.0.0/0
   ```

#### 🗄 RDS PostgreSQL 설정 (1시간)

1. **엔진**: PostgreSQL 15
2. **인스턴스 클래스**: db.t3.micro
3. **스토리지**: 20GB gp2
4. **보안 그룹**: EC2에서 접근 허용 (5432)

#### 🚀 수동 배포 테스트 (30분)

```bash
# EC2 접속
ssh -i your-key.pem ubuntu@your-ec2-ip

# Docker 설치
sudo apt update
sudo apt install docker.io docker-compose -y
sudo usermod -aG docker ubuntu

# 프로젝트 복사 및 실행
git clone your-repo
cd doboblog
docker-compose up -d
```

#### ✅ Day 3-4 체크리스트

- [ ] AWS 계정 설정 및 CLI 구성
- [ ] EC2 인스턴스 생성 및 SSH 접속
- [ ] RDS PostgreSQL 인스턴스 생성
- [ ] 수동 배포로 서비스 실행 확인

### 📋 주말: 네트워킹 및 보안 (2시간)

#### 🌐 도메인 연결 (Route 53) (1시간)

1. 도메인 구매 (Route 53 또는 외부)
2. Hosted Zone 생성
3. A 레코드로 EC2 IP 연결
4. 서브도메인 설정 (api.yourdomain.com)

#### 🔒 HTTPS 설정 (Let's Encrypt) (1시간)

```bash
# Nginx 설치 및 설정
sudo apt install nginx certbot python3-certbot-nginx

# SSL 인증서 획득
sudo certbot --nginx -d yourdomain.com -d api.yourdomain.com

# Nginx 설정 (/etc/nginx/sites-available/default)
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### ✅ Week 3 최종 체크리스트

- [ ] ✅ AWS 클라우드에 배포된 풀스택 서비스
- [ ] 커스텀 도메인 연결
- [ ] HTTPS 보안 연결
- [ ] 실제 프로덕션 환경 운영

---

## ⚙️ Week 4: CI/CD + 고급 기능

### 🎯 학습 목표

- [ ] GitHub Actions CI/CD 파이프라인 구축
- [ ] 자동화된 배포 프로세스 구현
- [ ] JWT 인증 시스템 구축
- [ ] 프로덕션 모니터링 설정

### 📋 Day 1-2: GitHub Actions (3시간)

#### 🎯 학습 목표

**이 스텝의 목적**: 현대적 DevOps 워크플로우와 자동화 파이프라인 구축
**핵심 학습 포인트**:

- CI/CD 원칙과 GitHub Actions 생태계
- YAML 기반 워크플로우 작성 및 최적화
- 환경별 배포 전략과 시크릿 관리
  **예상 소요시간**: 총 3시간 (Day 1: 1.5시간, Day 2: 1.5시간)

#### 🔄 1단계: CI/CD 파이프라인 설계 및 전략 수립 (30분)

**목적**: 자동화된 개발 워크플로우 설계와 품질 보증 체계 구축
**핵심 개념**: Continuous Integration, Continuous Deployment, Pipeline as Code

```
CI/CD 파이프라인 전략:

1. 📝 코드 푸시 → 자동 빌드 테스트
   ├── 코드 품질 검사 (ESLint, Prettier)
   ├── 타입 체크 (TypeScript)
   ├── 유닛 테스트 실행
   └── 빌드 성공 확인

2. 🚀 main 브랜치 머지 → 자동 배포
   ├── 프로덕션 빌드 생성
   ├── Docker 이미지 빌드
   ├── AWS 인스턴스 배포
   └── 헬스체크 확인

3. 🌍 환경별 분리 전략
   ├── Development: feature 브랜치 푸시 시
   ├── Staging: develop 브랜치 머지 시
   └── Production: main 브랜치 머지 시
```

**학습 포인트**:

- **CI (Continuous Integration)**: 코드 변경사항을 자주 통합하고 자동으로 검증
- **CD (Continuous Deployment)**: 검증된 코드를 자동으로 프로덕션에 배포
- **Pipeline as Code**: 배포 과정을 코드로 관리하여 버전 관리 및 재현 가능
- **환경 분리**: 개발/테스트/운영 환경을 분리하여 안정성 확보

#### ⚙️ GitHub Actions 워크플로우 (2시간)

**.github/workflows/ci.yml:**

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to AWS
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          EC2_HOST: ${{ secrets.EC2_HOST }}
          EC2_KEY: ${{ secrets.EC2_KEY }}
        run: |
          echo "$EC2_KEY" > ec2_key.pem
          chmod 600 ec2_key.pem

          ssh -o StrictHostKeyChecking=no -i ec2_key.pem ubuntu@$EC2_HOST '
            cd /home/ubuntu/doboblog &&
            git pull origin main &&
            docker-compose down &&
            docker-compose up -d --build
          '
```

#### 🔒 환경 변수 및 시크릿 설정 (30분)

GitHub Repository Settings에서 설정:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
EC2_HOST
EC2_KEY
DATABASE_URL
JWT_SECRET
```

#### ✅ Day 1-2 체크리스트

- [ ] GitHub Actions 워크플로우 구성
- [ ] 자동 빌드 및 테스트 파이프라인
- [ ] 자동 배포 스크립트 작성
- [ ] 시크릿 관리 및 보안 설정

### 📋 Day 3-4: 고급 기능 구현 (3시간)

#### 🔐 JWT 인증 시스템 (1.5시간)

**backend/src/middleware/auth.ts:**

```typescript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
```

#### 📸 이미지 업로드 (S3) (1시간)

```bash
# 필요한 패키지 설치 (AWS SDK v3가 최신)
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
npm install multer multer-s3
npm install uuid @types/uuid
```

**controllers/UploadController.ts:**

```typescript
import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuidv4 } from 'uuid';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.S3_BUCKET_NAME!,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const uniqueName = `${uuidv4()}-${file.originalname}`;
      cb(null, `uploads/${uniqueName}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});

export const uploadImage = upload.single('image');
```

#### 🔍 검색 기능 (30분)

**PostgreSQL Full-text Search:**

```typescript
// PostController.ts
static async searchPosts(req: Request, res: Response) {
  const { q } = req.query

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: q as string, mode: 'insensitive' } },
        { content: { contains: q as string, mode: 'insensitive' } },
        { excerpt: { contains: q as string, mode: 'insensitive' } }
      ],
      published: true
    },
    include: { tags: true, categories: true }
  })

  res.json(posts)
}
```

#### ✅ Day 3-4 체크리스트

- [ ] JWT 기반 인증 시스템 구현
- [ ] AWS S3 이미지 업로드 기능
- [ ] 검색 기능 (제목, 내용 기반)
- [ ] 관리자 대시보드 기본 구성

### 📋 주말: 모니터링 및 최적화 (2시간)

#### 📊 CloudWatch 모니터링 (1시간)

```bash
# CloudWatch 에이전트 설치 (EC2에서)
wget https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb
sudo dpkg -i -E ./amazon-cloudwatch-agent.deb

# 기본 메트릭 수집 설정
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard
```

#### ⚡ 성능 최적화 (30분)

```typescript
// Next.js 이미지 최적화
import Image from 'next/image'

// API 응답 캐싱
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300') // 5분 캐시
  next()
})

// Database 인덱스 추가
// prisma/schema.prisma
model Post {
  // ...
  @@index([published, createdAt])
  @@index([slug])
}
```

#### 📝 문서화 및 README 업데이트 (30분)

- API 문서 작성 (Postman/Swagger)
- 배포 가이드 문서화
- 트러블슈팅 가이드

#### ✅ Week 4 최종 체크리스트

- [ ] ✅ 완전 자동화된 CI/CD 파이프라인
- [ ] CloudWatch 모니터링 설정
- [ ] 성능 최적화 완료
- [ ] 완전한 프로덕션 서비스 운영

---

## 🎯 최종 성과물 체크리스트

### ✅ 기술적 성과

- [ ] **프론트엔드**: Next.js 14 + MDX + Tailwind CSS
- [ ] **백엔드**: Express + PostgreSQL + Prisma
- [ ] **인프라**: Docker + AWS (EC2, RDS, S3)
- [ ] **CI/CD**: GitHub Actions 자동화
- [ ] **모노레포**: Turborepo 구조

### ✅ 기능적 성과

- [ ] **정적 콘텐츠**: MDX 기반 블로그 포스트
- [ ] **동적 콘텐츠**: 데이터베이스 기반 포스트 관리
- [ ] **인증**: JWT 기반 관리자 시스템
- [ ] **파일업로드**: AWS S3 이미지 업로드
- [ ] **검색**: 전문 검색 기능

### ✅ 운영 성과

- [ ] **도메인**: 커스텀 도메인 + HTTPS
- [ ] **모니터링**: CloudWatch 기반 모니터링
- [ ] **자동화**: 코드 푸시 → 자동 배포
- [ ] **보안**: 프로덕션 레벨 보안 설정

---

## 📚 학습 리소스

### 📖 필수 문서

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Express.js 가이드](https://expressjs.com/en/guide/routing.html)
- [Prisma 문서](https://www.prisma.io/docs)
- [Docker 튜토리얼](https://docs.docker.com/get-started/)
- [AWS 기초](https://aws.amazon.com/getting-started/)

### 🛠 추천 도구

- **에디터**: VS Code + Extensions (ES7, Prisma, Docker)
- **DB 관리**: DBeaver, pgAdmin
- **API 테스트**: Postman, Insomnia
- **모니터링**: AWS CloudWatch, Vercel Analytics

### 🆘 트러블슈팅 가이드

#### 자주 발생하는 문제들

1. **포트 충돌**: `lsof -i :3000` 로 확인 후 프로세스 종료
2. **Docker 권한**: `sudo usermod -aG docker $USER` 후 재로그인
3. **AWS 권한**: IAM 정책 확인 및 액세스 키 재생성
4. **SSL 인증서**: Certbot 갱신 명령어 설정

---

## 📅 2025년 8월 구체적 학습 일정

### 🎯 4주 집중 스케줄 (2025.8.5 ~ 2025.9.1)

**준비 기간**: 8월 3-4일 (일-월)

- [ ] 개발 환경 설정 (Node.js, Git, VS Code)
- [ ] 프로젝트 디렉토리 생성
- [ ] 학습 계획 최종 점검

**Week 1**: 8월 5일(화) ~ 8월 11일(월)

- [ ] **목표**: Next.js MDX 블로그 + Vercel 배포
- [ ] **성과물**: 실제 접근 가능한 블로그 사이트
- [ ] **배포 URL**: https://[your-blog].vercel.app

**Week 2**: 8월 12일(월) ~ 8월 18일(일)

- [ ] **목표**: Express + PostgreSQL 백엔드
- [ ] **성과물**: REST API 서버 + 데이터베이스 연동
- [ ] **테스트**: Postman API 콜렉션 완성

**Week 3**: 8월 19일(월) ~ 8월 25일(일)

- [ ] **목표**: Docker + AWS 클라우드 배포
- [ ] **성과물**: 실제 프로덕션 환경 운영
- [ ] **접속**: https://[your-domain].com

**Week 4**: 8월 26일(월) ~ 9월 1일(일)

- [ ] **목표**: CI/CD + 고급 기능 구현
- [ ] **성과물**: 완전 자동화된 개발 워크플로우
- [ ] **최종**: 포트폴리오급 풀스택 서비스

### 🏖 8주 여유 스케줄 (2025.8.5 ~ 2025.9.29)

각 주차를 2주씩 확장하여 더 깊이 있는 학습과 충분한 복습 시간 확보

---

**🎉 4주 후 (9월 1일), 당신은 완전한 풀스택 개발자가 됩니다!**

> 매주 실제 작동하는 서비스를 만들며 점진적으로 성장하는 커리큘럼입니다.  
> 막히는 부분이 있으면 언제든 질문해주세요!

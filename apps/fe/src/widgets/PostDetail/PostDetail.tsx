import Link from 'next/link';
import { Typography } from '@/shared/ui/Typography/Typography';
import { Button } from '@/shared/ui/Button/Button';
import { CategoryBadge } from '@/entities/category/ui/CategoryBadge';
import { formatDate } from '@/shared/lib/date';
import type { Post } from '@/entities/post/model/types';
import type { Category } from '@/entities/category/model/types';

interface PostDetailProps {
  post: Post;
  category: Category;
}

export function PostDetail({ post, category }: PostDetailProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {/* 헤더 */}
      <header className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <CategoryBadge category={category} />
          <span className="text-sm text-[var(--color-muted-foreground)]">·</span>
          <time className="text-sm text-[var(--color-muted-foreground)]" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <Typography variant="h1" className="mb-4">
          {post.title}
        </Typography>

        <Typography variant="muted" className="text-lg">
          {post.description}
        </Typography>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs text-[var(--color-accent-foreground)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 구분선 */}
      <hr className="my-8 border-[var(--color-border)]" />

      {/* 콘텐츠 */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* 구분선 */}
      <hr className="my-8 border-[var(--color-border)]" />

      {/* 네비게이션 */}
      <nav className="flex justify-between">
        <Link href={`/category/${post.category}`}>
          <Button variant="outline">← {category.name} 목록으로</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">🏠 홈으로</Button>
        </Link>
      </nav>
    </div>
  );
}

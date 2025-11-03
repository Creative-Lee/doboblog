import Link from 'next/link';
import { type PostMetadata } from '../model';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui';
import { formatDate } from '@/shared/lib';
import { CATEGORIES } from '@/shared/config';

export interface PostCardProps {
  post: PostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  const category = CATEGORIES[post.category];

  return (
    <Link href={`/post/${post.slug}`} className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
            <span className={`text-[var(--color-${category.color})]`}>{category.name}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <CardTitle className="mt-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{post.description}</CardDescription>
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
        </CardContent>
      </Card>
    </Link>
  );
}

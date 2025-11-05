import { type PostMetadata } from '@/entities/post';
import { PostCard } from '@/entities/post';
import { Typography } from '@/shared/ui';

export interface PostListProps {
  posts: PostMetadata[];
  title?: string;
  emptyMessage?: string;
}

export function PostList({ posts, title, emptyMessage = '아직 글이 없습니다.' }: PostListProps) {
  return (
    <div className="space-y-6">
      {title && (
        <Typography variant="h2" className="mb-6">
          {title}
        </Typography>
      )}

      {posts.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-border)] bg-[var(--color-muted)]/20">
          <Typography variant="muted">{emptyMessage}</Typography>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

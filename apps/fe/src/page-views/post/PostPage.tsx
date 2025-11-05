import { PostDetail } from '@/widgets/PostDetail/PostDetail';
import type { Post } from '@/entities/post/model/types';
import type { Category } from '@/entities/category/model/types';

interface PostPageProps {
  post: Post;
  category: Category;
}

export function PostPage({ post, category }: PostPageProps) {
  return (
    <article className="container mx-auto px-4 py-12">
      <PostDetail post={post} category={category} />
    </article>
  );
}

import { PostList } from '@/widgets/PostList/PostList';
import { Typography } from '@/shared/ui/Typography/Typography';
import type { Category } from '@/entities/category/model/types';
import type { Post } from '@/entities/post/model/types';

interface CategoryPageProps {
  category: Category;
  posts: Post[];
}

export function CategoryPage({ category, posts }: CategoryPageProps) {
  const categoryIcon = {
    dev: '💻',
    money: '💰',
    retrospect: '📝',
  }[category.id];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-5xl">{categoryIcon}</span>
          <Typography variant="h1">{category.name}</Typography>
        </div>
        <Typography variant="muted" className="text-lg">
          {category.description}
        </Typography>
      </div>

      <PostList posts={posts} emptyMessage={`아직 ${category.name} 카테고리에 글이 없습니다.`} />
    </div>
  );
}

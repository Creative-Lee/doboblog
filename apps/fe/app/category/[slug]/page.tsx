import { notFound } from 'next/navigation';
import { PostList } from '@/widgets/PostList';
import { Typography } from '@/shared/ui';
import { CATEGORIES, type CategoryId } from '@/shared/config';
import { getAllPosts } from '@/entities/post/api/mdx';
import { sortByDate } from '@/shared/lib';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // 카테고리 유효성 검사
  if (!(slug in CATEGORIES)) {
    notFound();
  }

  const categoryId = slug as CategoryId;
  const category = CATEGORIES[categoryId];

  // 해당 카테고리의 포스트 가져오기
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter((post) => post.category === categoryId);
  const sortedPosts = sortByDate(categoryPosts);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-5xl">
            {categoryId === 'dev' && '💻'}
            {categoryId === 'money' && '💰'}
            {categoryId === 'retrospect' && '📝'}
          </span>
          <Typography variant="h1">{category.name}</Typography>
        </div>
        <Typography variant="muted" className="text-lg">
          {category.description}
        </Typography>
      </div>

      <PostList posts={sortedPosts} emptyMessage={`아직 ${category.name} 카테고리에 글이 없습니다.`} />
    </div>
  );
}

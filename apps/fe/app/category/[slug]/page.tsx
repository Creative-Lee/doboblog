import { notFound } from 'next/navigation';
import { CategoryPage } from '@/page-views/category/CategoryPage';
import { CATEGORIES, type CategoryId } from '@/shared/config/categories';
import { getAllPosts } from '@/entities/post/api/mdx';
import { sortByDate } from '@/shared/lib/date';

interface CategoryPageRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPageRoute({ params }: CategoryPageRouteProps) {
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

  return <CategoryPage category={category} posts={sortedPosts} />;
}

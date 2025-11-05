import { notFound } from 'next/navigation';
import { PostPage } from '@/page-views/post/PostPage';
import { CATEGORIES } from '@/shared/config/categories';
import { getPostBySlug, getAllPosts } from '@/entities/post/api/mdx';

interface PostPageRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPageRoute({ params }: PostPageRouteProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = CATEGORIES[post.category];

  return <PostPage post={post} category={category} />;
}

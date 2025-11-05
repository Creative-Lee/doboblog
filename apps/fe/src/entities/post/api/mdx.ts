import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { type Post } from '../model/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: slug.replace(/\.mdx$/, ''),
    title: data.title || '',
    date: data.date || '',
    category: data.category || 'dev',
    tags: data.tags || [],
    description: data.description || '',
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, '')))
    .filter((post): post is Post => post !== null);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

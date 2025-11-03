import { type CategoryId } from '@/shared/config';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: CategoryId;
  tags: string[];
  description: string;
  content: string;
}

export interface PostMetadata extends Omit<Post, 'content'> {}

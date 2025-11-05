import { type Category } from '../model/types';
import { cn } from '@/shared/lib/tailwind';

export interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    green: 'bg-green-500/10 text-green-600 dark:text-green-400',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        colorMap[category.color] || 'bg-gray-500/10 text-gray-600',
        className
      )}
    >
      {category.name}
    </span>
  );
}

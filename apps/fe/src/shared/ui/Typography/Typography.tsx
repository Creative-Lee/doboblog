import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/lib';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'muted';
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, as, variant = 'body', ...props }, ref) => {
    const Component = as || (variant.startsWith('h') ? variant : 'p');

    const variantStyles = {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b border-[var(--color-border)] pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      body: 'leading-7',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-[var(--color-muted-foreground)]',
    };

    return (
      <Component
        ref={ref as any}
        className={cn(variantStyles[variant], className)}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography };

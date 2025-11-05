import Link from 'next/link';
import { ThemeToggle } from '@/features/themeToggle/ui/ThemeToggle';
import { Button } from '@/shared/ui/Button/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="text-2xl">🎮</span>
          <span className="text-xl font-bold">doboblog</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/">
            <Button variant="ghost">홈</Button>
          </Link>
          <Link href="/category/dev">
            <Button variant="ghost">개발</Button>
          </Link>
          <Link href="/category/money">
            <Button variant="ghost">돈</Button>
          </Link>
          <Link href="/category/retrospect">
            <Button variant="ghost">회고</Button>
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

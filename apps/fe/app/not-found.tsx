import Link from 'next/link';
import { Typography } from '@/shared/ui/Typography/Typography';
import { Button } from '@/shared/ui/Button/Button';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-8 text-9xl">🎮</div>

      <Typography variant="h1" className="mb-4">
        404 - 페이지를 찾을 수 없습니다
      </Typography>

      <Typography variant="muted" className="mb-8 max-w-md text-lg">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        <br />
        게임 맵으로 돌아가서 다시 탐험해보세요!
      </Typography>

      <div className="flex gap-4">
        <Link href="/">
          <Button variant="default" size="lg">
            🏠 홈으로 돌아가기
          </Button>
        </Link>
        <Link href="/category/dev">
          <Button variant="outline" size="lg">
            💻 개발 글 보기
          </Button>
        </Link>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Link
          href="/category/dev"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:bg-[var(--color-accent)]"
        >
          <div className="mb-2 text-3xl">💻</div>
          <Typography variant="h4" className="mb-1">
            Dev
          </Typography>
          <Typography variant="muted" className="text-sm">
            개발 관련 글
          </Typography>
        </Link>
        <Link
          href="/category/money"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:bg-[var(--color-accent)]"
        >
          <div className="mb-2 text-3xl">💰</div>
          <Typography variant="h4" className="mb-1">
            Money
          </Typography>
          <Typography variant="muted" className="text-sm">
            재무/투자 관련 글
          </Typography>
        </Link>
        <Link
          href="/category/retrospect"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:bg-[var(--color-accent)]"
        >
          <div className="mb-2 text-3xl">📝</div>
          <Typography variant="h4" className="mb-1">
            Retrospect
          </Typography>
          <Typography variant="muted" className="text-sm">
            회고 글
          </Typography>
        </Link>
      </div>
    </div>
  );
}

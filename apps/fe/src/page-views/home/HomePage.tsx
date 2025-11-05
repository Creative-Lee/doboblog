import { GameMap } from '@/widgets/GameMap/GameMap';
import { Typography } from '@/shared/ui/Typography/Typography';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <Typography variant="h1" className="mb-4">
          🎮 doboblog에 오신 것을 환영합니다
        </Typography>
        <Typography variant="muted" className="text-lg">
          게임 맵을 탐험하며 블로그 글을 발견해보세요
        </Typography>
      </div>

      <GameMap />

      <div className="mt-12 text-center">
        <Typography variant="h3" className="mb-4">
          카테고리 소개
        </Typography>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <div className="mb-2 text-4xl">💻</div>
            <Typography variant="h4" className="mb-2">
              Dev
            </Typography>
            <Typography variant="muted">개발과 기술에 대한 이야기</Typography>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <div className="mb-2 text-4xl">💰</div>
            <Typography variant="h4" className="mb-2">
              Money
            </Typography>
            <Typography variant="muted">재무와 투자에 대한 이야기</Typography>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <div className="mb-2 text-4xl">📝</div>
            <Typography variant="h4" className="mb-2">
              Retrospect
            </Typography>
            <Typography variant="muted">회고와 생각 정리</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

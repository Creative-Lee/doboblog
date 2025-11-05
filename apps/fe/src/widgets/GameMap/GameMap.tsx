'use client';

import { useRouter } from 'next/navigation';
import { Character } from '@/entities/character/ui/Character';
import { CATEGORIES, type CategoryId } from '@/shared/config/categories';
import { useCharacterMovement } from '@/features/characterMovement/model/useCharacterMovement';
import { cn } from '@/shared/lib/tailwind';

interface CategoryArea {
  id: CategoryId;
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}

const CATEGORY_AREAS: CategoryArea[] = [
  {
    id: 'dev',
    position: { x: 100, y: 150 },
    size: { width: 180, height: 180 },
    color: 'from-blue-400/30 to-blue-600/30 border-blue-500',
  },
  {
    id: 'money',
    position: { x: 320, y: 150 },
    size: { width: 180, height: 180 },
    color: 'from-green-400/30 to-green-600/30 border-green-500',
  },
  {
    id: 'retrospect',
    position: { x: 540, y: 150 },
    size: { width: 180, height: 180 },
    color: 'from-purple-400/30 to-purple-600/30 border-purple-500',
  },
];

export function GameMap() {
  const router = useRouter();
  const { characterState, moveToPosition } = useCharacterMovement({ x: 400, y: 400 });

  const handleAreaClick = (area: CategoryArea) => {
    const centerX = area.position.x + area.size.width / 2;
    const centerY = area.position.y + area.size.height / 2;

    // 캐릭터를 해당 영역으로 이동
    moveToPosition({ x: centerX, y: centerY });

    // 잠시 후 카테고리 페이지로 이동
    setTimeout(() => {
      router.push(`/category/${area.id}`);
    }, 400);
  };

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-[var(--color-border)] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* 카테고리 영역들 */}
      {CATEGORY_AREAS.map((area) => {
        const category = CATEGORIES[area.id];
        return (
          <button
            key={area.id}
            onClick={() => handleAreaClick(area)}
            className={cn(
              'absolute flex flex-col items-center justify-center gap-2 rounded-xl border-2 bg-gradient-to-br p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl',
              area.color
            )}
            style={{
              left: `${area.position.x}px`,
              top: `${area.position.y}px`,
              width: `${area.size.width}px`,
              height: `${area.size.height}px`,
            }}
          >
            <div className="text-4xl">
              {area.id === 'dev' && '💻'}
              {area.id === 'money' && '💰'}
              {area.id === 'retrospect' && '📝'}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {category.name}
            </h3>
            <p className="text-center text-sm text-slate-700 dark:text-slate-300">
              {category.description}
            </p>
          </button>
        );
      })}

      {/* 캐릭터 */}
      <Character position={characterState.position} isMoving={characterState.isMoving} />

      {/* 조작 안내 */}
      <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
        <p>🎮 방향키 또는 WASD로 이동</p>
        <p>🖱️ 영역 클릭으로 이동</p>
      </div>
    </div>
  );
}

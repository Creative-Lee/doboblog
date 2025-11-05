'use client';

import { type CharacterPosition } from '../model/types';
import { cn } from '@/shared/lib/tailwind';

export interface CharacterProps {
  position: CharacterPosition;
  isMoving?: boolean;
  className?: string;
}

export function Character({ position, isMoving = false, className }: CharacterProps) {
  return (
    <div
      className={cn(
        'absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl shadow-lg transition-all duration-300',
        isMoving && 'animate-bounce',
        className
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      🚶
    </div>
  );
}

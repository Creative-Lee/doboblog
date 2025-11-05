'use client';

import { useState, useEffect, useCallback } from 'react';
import { type CharacterState, type CharacterPosition } from '@/entities/character/model/types';

export function useCharacterMovement(initialPosition: CharacterPosition) {
  const [characterState, setCharacterState] = useState<CharacterState>({
    position: initialPosition,
    isMoving: false,
    targetPosition: null,
    direction: 'down',
  });

  const moveToPosition = useCallback((target: CharacterPosition) => {
    setCharacterState((prev) => ({
      ...prev,
      isMoving: true,
      targetPosition: target,
    }));

    // 이동 애니메이션 시뮬레이션
    setTimeout(() => {
      setCharacterState((prev) => ({
        ...prev,
        position: target,
        isMoving: false,
        targetPosition: null,
      }));
    }, 300);
  }, []);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const step = 50;
      const { position } = characterState;

      let newPosition: CharacterPosition | null = null;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          newPosition = { x: position.x, y: Math.max(50, position.y - step) };
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          newPosition = { x: position.x, y: Math.min(450, position.y + step) };
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          newPosition = { x: Math.max(50, position.x - step), y: position.y };
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          newPosition = { x: Math.min(750, position.x + step), y: position.y };
          break;
      }

      if (newPosition) {
        e.preventDefault();
        moveToPosition(newPosition);
      }
    },
    [characterState, moveToPosition]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return {
    characterState,
    moveToPosition,
  };
}

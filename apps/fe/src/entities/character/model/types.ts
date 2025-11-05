export interface CharacterPosition {
  x: number;
  y: number;
}

export interface CharacterState {
  position: CharacterPosition;
  isMoving: boolean;
  targetPosition: CharacterPosition | null;
  direction: 'up' | 'down' | 'left' | 'right';
}

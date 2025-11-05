export const CATEGORIES = {
  dev: {
    id: 'dev' as const,
    name: 'Dev',
    description: '개발과 기술에 대한 이야기',
    color: 'blue',
    position: { x: 100, y: 200 },
  },
  money: {
    id: 'money' as const,
    name: 'Money',
    description: '재무와 투자에 대한 이야기',
    color: 'green',
    position: { x: 300, y: 200 },
  },
  retrospect: {
    id: 'retrospect' as const,
    name: 'Retrospect',
    description: '회고와 생각 정리',
    color: 'purple',
    position: { x: 500, y: 200 },
  },
} as const;

export type CategoryId = keyof typeof CATEGORIES;

export type Category = (typeof CATEGORIES)[CategoryId];

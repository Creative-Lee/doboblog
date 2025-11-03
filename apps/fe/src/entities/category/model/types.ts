export type CategoryId = 'dev' | 'money' | 'retrospect';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  color: string;
  position: {
    x: number;
    y: number;
  };
}

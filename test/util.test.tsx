import { next } from '../src/util';

describe('next', () => {
  const numbers = [900, 700, 500, 50];

  it('should get next snap point for positive direction', () => {
    const goal = 600;
    const direction = 1;

    expect(next(goal, direction, numbers)).toBe(700);
  });

  it('should get previous snap point for negative direction', () => {
    const goal = 600;
    const direction = -1;

    expect(next(goal, direction, numbers)).toBe(500);
  });

  it('should get extreme snap point for move beyond', () => {
    expect(next(950, 1, numbers)).toBe(900);
    expect(next(0, -1, numbers)).toBe(50);
  });

  it('should get same snap point if no move', () => {
    expect(next(700, 0, numbers)).toBe(700);
    expect(next(50, 0, numbers)).toBe(50);
  });
});

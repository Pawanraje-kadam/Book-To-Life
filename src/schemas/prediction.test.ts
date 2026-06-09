import { describe, it, expect } from 'vitest';
import { predictionSchema } from './prediction';

describe('Prediction Schema', () => {
  it('should pass valid data', () => {
    const result = predictionSchema.safeParse({
      bookTitle: 'A',
      age: 25,
      currentRole: 'Dev',
      mainGoal: 'Learn more daily',
      availableHours: 2,
    });
    expect(result.success).toBe(true);
  });
});

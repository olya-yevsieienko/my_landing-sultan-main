import { getRoundedNum } from '../utils/getRoundedNum';

describe('Number rounding', () => {
  test('rounding correct number', () => {
    expect(getRoundedNum(123.45678)).toEqual(123.46);
  });
});

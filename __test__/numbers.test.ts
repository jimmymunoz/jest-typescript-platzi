import {numbers} from '../numbers'

describe('Comparar numeros', () => {
  test('Mayor que', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3)
  });
});
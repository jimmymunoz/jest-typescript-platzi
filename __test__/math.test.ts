import {sumar,  multiplicar,  restart,  dividir} from '../math'

describe('Calculos matematicos', () => {
  test('Pruba de sumas', () => {
    expect(sumar(1, 1)).toBe(2)
  });
  
  test('Multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4)
  });
});
import {
  isNull,
  isTrue,
  isFalse,
  isUndefined
} from '../true'

describe('Probar resultados nulos', () => {
  test('should test if a value is null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados verdaderos', () => {
  test('Verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('Falsos', () => {
    expect(isFalse()).toBeFalsy()
  });
});

describe('Probar resultados undefined', () => {
  expect(isUndefined()).toBeUndefined()
});

describe('Probar resultados no verdaderos', () => {
  test('Falso o verdadero', () => {
    expect(!isTrue()).not.toBeTruthy()
  });
});
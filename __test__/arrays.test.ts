
import {getFruits, getColors} from '../arrays'

//  npx jest __test__/arrays.test.ts
describe('Comprobamos que existe un elemento', () => {
  test('Tiene una banana', () => {
    expect(getFruits()).toContain('banana')
  });

  test('no contine platano', () => {
    expect(getFruits()).not.toContain('platano')
  });

  test('Comprobar el tamano de un arreglo', () => {
    expect(getFruits()).toHaveLength(6)
  });

  test('Comprobamos que existe un color', () => {
    expect(getColors()).toContain('azul')
  });
});
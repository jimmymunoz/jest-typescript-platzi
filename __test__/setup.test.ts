// npx jest __test__/setup.test.ts
afterEach(() => console.log('despues de cada prueba'))
afterAll(() => console.log('despues de todas las prueba'))

beforeAll(() => console.log('Antes de todas las pruebas'))
beforeEach(() => console.log('Antes de cada prueba'))

describe('Preparar antes de ejecurar', () => {
  test('es verdaderos', () => {
    expect(true).toBeTruthy()
  });
});
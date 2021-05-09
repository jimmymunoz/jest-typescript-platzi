
// npx jest __test__/string.test.ts
describe('Comprobar cadenas de texto', () => {
  const text  = 'un bonito texto'
  
  test('debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/)
  });

  test('no contine el siguiente texto', () => {
    expect(text).not.toMatch(/es/)
  });

  test('comprobar el tamano de un texto', () => {
    expect(text).toHaveLength(15)
  });
});
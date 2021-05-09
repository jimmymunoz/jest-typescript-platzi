describe('Comparadores communes', () => {
  const user = {
    name: 'Jimmy',
    lastname: 'Munoz'
  }
  const user2 = {
    name: 'Jimmy2',
    lastname: 'Munoz'
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user);
  });

  test('no exactalmente iguales', () => {
    expect(user).not.toEqual(user2)
  });
});
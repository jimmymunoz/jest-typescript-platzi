import { getCharacter } from '../snapshot';
import rick from '../rick.json'

// npx jest __test__/snapshot.test.ts
describe('Es hora de las instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  });

  test.skip('Siempre fallarara el snapshot', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() *20),
    }
    expect(user).toMatchSnapshot()

  });

  test.only('Tenemos una exepcion en el condigo', () => {
    const user = {
      name: "Jimmy MUNOZ",
      id: Math.floor(Math.random() *20),
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    })

  });
});
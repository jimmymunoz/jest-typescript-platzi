import {getDataFromApi} from '../promise'

// npx jest __test__/promise.test.ts
describe('Probando promesas', () => {
  test('Realizando una peticion a una api', async() => {
    const url = 'https://rickandmortyapi.com/api/character/'
    const data = await getDataFromApi(url)
    // console.log('data',data)
     // @ts-ignore
     expect(data.results.length).toBeGreaterThan(0)
     
    });
    
    test('Resuelve un hola', () => {
    // @ts-ignore
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  });

    test('rechaza con un error', () => {
    // @ts-ignore
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  });

  test('Rechaza con un error', () => {
    return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
  })

  test('Realizar una peticion a una api con error 404', async () => {
    const apiError = 'http://httpstat.us/404'
    const peticion = getDataFromApi(apiError)
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
  });
  test('Realizar una peticion a una api con error 500', async () => {
    const apiError = 'http://httpstat.us/500'
    const peticion = getDataFromApi(apiError)
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
  });

  test('Resulve un hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    await expect(Promise.reject('Hola')).rejects.toBe('Hola')
  });

  test('Error 500', async () => {
    try {
      // Sabemos que esta request va a devolver un error 500, entonces va a ejecutar el catch con el error.
      await getDataFromApi(`http://httpstat.us/500`);
    } catch(error) {
      expect(error).toEqual(new Error('Request failed with status code 500'));
    }
  });
});
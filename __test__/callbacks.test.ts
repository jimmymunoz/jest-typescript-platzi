import {callBackHell} from '../callbacks'

// npx jest __test__/callbacks.test.ts
describe('Probando un callback', () => {
  test('Probar Callback', (done) => {
    const otherCallBack = (data: string) => {
      expect(data).toBe('Hola javascripters')
      done()
    }
    callBackHell(otherCallBack)
  });  
});
import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Hello from '../components/Hello'

// npx jest src/__test__/Hello.test.js
Enzyme.configure({adapter: new Adapter})

describe('Anadiendo pruebas a React', () => {
 test('Comprobamos el texto que recibe por prop', () => {
   const data = {title: 'Hola Jest'}
   const wrapper = mount(
     <Hello title={data.title} />
   )
   const h1 = wrapper.find('h1')
   expect(h1.text()).toBe('Hola Jest')
 }); 
});
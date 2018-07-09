import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockCard = [{name: 'Bingo', 
      homeworld: 'farm', 
      species: 'canine', 
      population: 15 }]

    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot()
  } )

  it('only render planet cards when there is a terrain prop', () => {
    const mockCard = [{name: 'Earth', terrain: 'varied', 
      climate: 'varied', 
      population: 30000000000,
      residents: 'Me. I am the most important'}]
    const wrapper = shallow(<Card card={card} />)
    expect(wrapper.find('.planetCard').length).toEqual(10)
  })

})
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer.js';

describe('CardContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockCards = 
    [{name: 'Bingo', 
      homeworld: 'farm', 
      species: 'canine', 
      population: 15 },
      {name: 'Wanda',
      homeworld: 'fish-bowl',
      species: 'fish',
      population: 1}
    ]

    const wrapper = shallow(<CardContainer cards={mockCards} />)
    expect(wrapper).toMatchSnapshot();

  })
})
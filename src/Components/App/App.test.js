import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
// import { findPlanets, findVehicles } from '../helper/api-caller.js';

// jest.mock('../helper/api-caller.js');


describe('App component', () => {


  it('getPeople calls findPeople and sets the state.cards', async () => {
    // let wrapper = shallow(<App />);
    // // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockCards)})

    // // wrapper.setState({cards: []});

    // expect(wrapper.state('cards')).toEqual([])
    // // const mockCards = [{}, {}]
    
    // // await wrapper.instance().getPeople();

  });

  // it('after getPeople is called that state should be set', async () => {
  //   const expected = [{name: 'Bingo', 
  //     homeworld: 'farm', 
  //     species: 'canine', 
  //     population: 15 },
  //     {name: 'Wanda',
  //     homeworld: 'fish-bowl',
  //     species: 'fish',
  //     population: 1}
  //   ]
  //     wrapper.setState({ cards: expected })

  //     // Execution
  //     await wrapper.instance().getPeople()
      
  //     // Expectation
  //     expect(wrapper.state('cards')).toEqual(expected)
  // })

 
});
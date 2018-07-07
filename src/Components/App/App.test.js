import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { findPeople, findPlanets, findVehicles } from '../helper/api-caller.js';

jest.mock('../helper/api-caller.js');


describe('App component', () => {


  // it('getPeople calls findPeople and sets the state.cards', async () => {
  //   let wrapper = shallow(<App />);
    
  //   await wrapper.instance().getPeople();

  //   expect(findPeople).toHaveBeenCalled();
  //   // expect(wrapper.state('cards')).toEqual()
  // });
 
});
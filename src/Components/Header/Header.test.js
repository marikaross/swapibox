import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.js';

describe('header', () => {
  it('should call getPeople onClick', () => {
    const mockGetPeople = jest.fn();
    const wrapper = shallow(<Header getPeople={mockGetPeople}/>)

    wrapper.find('.people-button').simulate('click');
    expect(mockGetPeople).toBeCalled();
  });

  it('should call getPlanets onClick', () => {
    const mockGetPlanets = jest.fn();
    const wrapper = shallow(<Header getPlanets={mockGetPlanets} />)

    wrapper.find('.planet-button').simulate('click');
    expect(mockGetPlanets).toBeCalled();
  });

  it('should call getStarships onClick', () => {
    const mockGetStarships = jest.fn()
    const wrapper = shallow(<Header getStarships={mockGetStarships} />)
    wrapper.find('.vehicles-button').simulate('click');
  })


  it('should match the snapshot with all data passed in correctly', () => {

    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();

  })
})
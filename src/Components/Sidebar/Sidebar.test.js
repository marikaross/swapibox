import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar.js';

describe('Sidebar', () => {
  it.only('should match the snapshot with all data passed in correctly', () => {
    const mockScroll = {summary: 'This is a fake scroll', 
      title: 'There\'s no hope', 
      releaseDate: '2018-07-07', 
     }

    

    const wrapper = shallow(<Sidebar summary={mockScroll} />)
    expect(wrapper).toMatchSnapshot();

  })
})
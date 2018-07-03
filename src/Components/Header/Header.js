import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <button findPeople={props.findPeople}>People</button>
      <button findPlanets={props.findPlanets}>Planets</button>
      <button findStarships={props.findStarships}>Starships</button>
      <button className='favorites'>Favorites</button>
    </div>
    )
}
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <button onClick={props.getPeople}>People</button>
      <button onClick={props.getPlanets}>Planets</button>
      <button onClick={props.getStarships}>Starships</button>
      <button className='favorites'>Favorites</button>
    </div>
    )
}

export default Header;
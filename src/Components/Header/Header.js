import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <button className="people-button" onClick={props.getPeople}>People</button>
      <button className="planet-button" onClick={props.getPlanets}>Planets</button>
      <button className="vehicles-button" onClick={props.getStarships}>Starships</button>
      <button className='favorites'>Favorites</button>
    </div>
    )
}

export default Header;

Header.propTypes = {
  getPeople: PropTypes.func.isRequired,
  getPlanets: PropTypes.func.isRequired,
  getStarships: PropTypes.func.isRequired
}
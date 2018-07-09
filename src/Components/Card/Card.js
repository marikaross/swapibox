import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({name, homeworld, species, population, terrain, climate, residents, model, starship_class, passengers}) => {
  const peopleCard =
    <article className='peopleCard card' key={name}>
      <h2>{name}</h2>
      <h3>homeworld: {homeworld}</h3>
      <h3>species: {species}</h3>
      <h3>population: {population}</h3>
      <button className='favorites'></button>
    </article>
  
  const planetCard = 
    <article className='planetCard card' key={name}>
      <h2>{name}</h2>
      <h3>terrain: {terrain}</h3>
      <h3>climate: {climate}</h3>
      <h3>population: {population}</h3>
      <h3>residents: {residents}</h3>
      <button className='favorites'></button>
    </article>

  const vehicleCard = 
    <article className='vehicleCard card' key={name}>
      <h2>{name}</h2>
      <h3>model: {model}</h3>
      <h3>class: {starship_class}</h3>
      <h3># of passengers: {passengers}</h3>
      <button className='favorites'></button>
    </article>


  if (homeworld) {
    return peopleCard
  } else if (terrain) {
    return planetCard
  } else {
    return vehicleCard
  }
};


export default Card;


Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.number,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  passengers: PropTypes.number
};
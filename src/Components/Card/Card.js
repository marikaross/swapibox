import React from 'react';
import PropTypes from 'prop-types';

const Card = ({name, homeworld, species, population, terrain, climate, residents, pop}) => {
 const peopleCard =
    <article className='peopleCard' key={name}>
      <h2>{name}</h2>
      <h3>homeworld: {homeworld}</h3>
      <h3>species: {species}</h3>
      <h3>population: {population}</h3>
    </article>
  
  const planetCard = 
    <article classname='planetCard' key={name}>
      <h2>{name}</h2>
      <h3>terrain: {terrain}</h3>
      <h3>climate: {climate}</h3>
      <h3>population: {pop}</h3>
      <h3>residents: {residents}</h3>
    </article>


  return homeworld ? peopleCard : planetCard
}


export default Card;
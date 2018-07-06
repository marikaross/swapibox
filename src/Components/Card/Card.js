import React from 'react';
import PropTypes from 'prop-types';

const Card = ({name, homeworld, species, population, terrain, climate, residents, model, type, passengers}) => {
 const peopleCard =
    <article className='peopleCard' key={name}>
      <h2>{name}</h2>
      <h3>homeworld: {homeworld}</h3>
      <h3>species: {species}</h3>
      <h3>population: {population}</h3>
    </article>
  
  const planetCard = 
    <article className='planetCard' key={name}>
      <h2>{name}</h2>
      <h3>terrain: {terrain}</h3>
      <h3>climate: {climate}</h3>
      <h3>population: {population}</h3>
      <h3>residents: {residents}</h3>
    </article>

  const vehicleCard = 
    <article className='vehicleCard' key={name}>
      <h2>{name}</h2>
      <h3>model:{model}</h3>
      <h3>class: {type}</h3>
      <h3># of passengers: {passengers}</h3>
    </article>


  return homeworld ? peopleCard : planetCard
}


export default Card;
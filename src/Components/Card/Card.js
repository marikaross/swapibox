import React from 'react';
import PropTypes from 'prop-types';

const Card = ({name, homeworld, species, population}) => {

  return (
    <article className='card' key={name}>
      <h2>{name}</h2>
      <h3>homeworld: {homeworld}</h3>
      <h3>species: {species}</h3>
      <h3>population: {population}</h3>
    </article>
    )
}

export default Card;
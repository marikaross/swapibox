import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <article className='card'>
      <h2>{props.name}</h2>
      <h3>homeworld: {props.homeworld}</h3>
      <h3>species: {props.species}</h3>
      <h3>population: {props.population}</h3>
    </article>
    )
}

export default Card;
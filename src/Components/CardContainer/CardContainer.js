import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

const CardContainer = ({cards}) => {
  const allCards = cards.map(card => {
    return <Card 
      name={name}
      homeworld={homeworld}
      species={species}
      population={population} />
  })
  return (
    <div>
      {allCards}
    </div>

    )
}

export default CardContainer
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

const CardContainer = ({cards}) => {

  const allCards = cards.map(card => {
    return (
      <Card
        name={card.name}
        species={card.species}
        homeworld={card.homeworld}
        population={card.population}
        key={card.name}
      />
    );
  });

  /**
   * this will accomplish the same thing as above but in a concise one line
   *
   */
  // const allCards = cards.map(card => <Card key={card.name} {...card}/>);
  return (
    <div>
      {allCards}
    </div>

  );
};

export default CardContainer;
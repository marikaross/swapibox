import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({cards}) => {
  const allCards = cards.map(card => <Card key={card.name} {...card}/>);
  return (
    <div className='cardContainer'>
      {allCards}
    </div>

  );
};

export default CardContainer;






CardContainer.propTypes = {
  cards: PropTypes.array.isRequired
};
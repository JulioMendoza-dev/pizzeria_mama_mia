import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <Link to={`/pizza/${pizza.id}`}>View Details</Link>
    </div>
  );
};

export default CardPizza;

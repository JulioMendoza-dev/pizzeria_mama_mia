import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
      <p>Price: {pizza.price}</p>
    </div>
  );
};

export default Pizza;

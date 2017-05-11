import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li><h3>{item.name}</h3></li>
    <li><h3>Price: {item.price}</h3></li>
    <li><h3>Happiness: {item.happiness}</h3></li>
  </ul>
);


export default ItemDetail;

import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.happiness}</li>
    <li>
      <img src={item.image_url} width="25px"></img>
    </li>
  </ul>
);


export default ItemDetail;

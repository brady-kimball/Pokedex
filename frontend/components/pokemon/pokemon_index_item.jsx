import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li className="pokemonIndexItem">
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} width='20px' />
      <span>{pokemon.name}</span>
    </Link>
  </li>
)

export default PokemonIndexItem

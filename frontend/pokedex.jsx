import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import {selectAllPokemon } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.selectAllPokemon = selectAllPokemon;
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

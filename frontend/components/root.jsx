import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Link } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <section>
        <header>
          <nav>
            <img src="./assets/pokeball.svg" alt="pokedex" />
            <ul>
              <li><Link to="/">Create Pokemon!</Link></li>
            </ul>
          </nav>
        </header>
        
        <Route path="/" component={ PokemonIndexContainer } />
      </section>
    </HashRouter>
  </Provider>
);

export default Root;

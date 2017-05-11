import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import { Route } from 'react-router-dom'
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemonLis = this.props.pokemon.map((pokemon) => (
      <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
    ));
    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
        <ul>
          {pokemonLis}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;

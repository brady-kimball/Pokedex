import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import { Route, Switch } from 'react-router-dom'
import PokemonDetailContainer from './pokemon_detail_container'
import PokemonFormContainer from './pokemon_form_container'

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  loadSpinner() {
    if (this.props.load) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    let pokemonLis = this.props.pokemon.map((pokemon) => (
      <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
    ));
    return (
      <section className="pokedex">
        {this.loadSpinner()}
        <Switch>
          <Route path="/pokemon/:pokemonId/edit" component={PokemonFormContainer} />
          <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
          <Route component={ PokemonFormContainer } />
        </Switch>
        <ul>
          {pokemonLis}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;

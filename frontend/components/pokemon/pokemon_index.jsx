import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemonLis = this.props.pokemon.map((pokemon) => (
      <li key={pokemon.name}>
        <img src={pokemon.image_url} width='30px' />
        <span>{pokemon.name}</span>
      </li>
    ));
    return (
      <ul>
        {pokemonLis}
      </ul>
    );
  }
}

export default PokemonIndex;

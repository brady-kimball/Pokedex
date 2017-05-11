import React from 'react';
import { values } from 'lodash';
import { Route, Link } from 'react-router-dom'
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    let currentId = this.props.match.params.pokemonId;
    if (newProps.match.params.pokemonId !== currentId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let moveLis;
    let itemLis;
    if (this.props.pokemonDetail.moves) {
      moveLis = this.props.pokemonDetail.moves.map((move, idx) => (
        <li key={idx}>{move}</li>
      ));
      itemLis = this.props.pokemonDetail.items.map((item) => (
        <Link key={item.id} to={`/pokemon/${this.props.pokemonDetail.id}/items/${item.id}`}>
          <li>{item.name}</li>
        </Link>
      ));
    }
    return (
      <div>
        <ul>
          <li>{this.props.pokemonDetail.name}</li>
          <li>{this.props.pokemonDetail.attack}</li>
          <li>{this.props.pokemonDetail.defense}</li>
          <li>{this.props.pokemonDetail.name}</li>
          <ul>
            {moveLis}
          </ul>
          <li>{this.props.pokemonDetail.poke_type}</li>
          <ul>
            {itemLis}
          </ul>
        </ul>
      <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
      </div>

    );
  }
}

export default PokemonDetail;

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
      moveLis = this.props.pokemonDetail.moves.join(', ');
      itemLis = this.props.pokemonDetail.items.map((item) => (
        <Link key={item.id} to={`/pokemon/${this.props.pokemonDetail.id}/items/${item.id}`}>
          <img src={item.image_url} height="80px" />
        </Link>
      ));
    }
    return (
      <section>
        <figure><img className="poke-image"
                     src={this.props.pokemonDetail.image_url} /></figure>
        <ul>
          <li><h2>{this.props.pokemonDetail.name}</h2></li>
          <li><h3>Type: {this.props.pokemonDetail.poke_type}</h3></li>
          <li><h3>Attack: {this.props.pokemonDetail.attack}</h3></li>
          <li><h3>Defense: {this.props.pokemonDetail.defense}</h3></li>
          <li><h3>Moves: {moveLis}</h3></li>
        </ul>
        <article>
          <span><h3>Items</h3></span>
          <div className="item-images">
            {itemLis}
          </div >
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </article>
      </section>

    );
  }
}

export default PokemonDetail;

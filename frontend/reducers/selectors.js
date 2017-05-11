import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
}

export const selectPokemonItem = (state, itemId) => {
  // debugger
  let items = state.pokemonDetail.items;
  if (items) {
    return items.filter( (item) => (
      item.id == itemId
    ))[0];
  }
  return {}
}

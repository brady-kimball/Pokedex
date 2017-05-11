import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
}

export const selectPokemonItem = (state, itemId) => {
  debugger
  return state.pokemonDetail.items.filter( (item) => (
    item.id == itemId
  ))[0];
}

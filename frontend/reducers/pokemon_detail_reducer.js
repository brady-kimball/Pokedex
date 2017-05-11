import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;

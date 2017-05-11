import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON }
  from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      let pokemon = {};
      pokemon[action.pokemon.id] = {
        id: action.pokemon.id,
        name: action.pokemon.name,
        image_url: action.pokemon.image_url
      };
      return Object.assign({}, state, pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;

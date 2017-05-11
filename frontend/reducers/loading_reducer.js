import { START_LOADING_POKEMON, START_LOADING_ALL_POKEMON, RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON,
          RECEIVE_POKEMON } from "../actions/pokemon_actions"
const loadingReducer = (state = {}, action) => {
  switch (action.type) {
    case START_LOADING_POKEMON, START_LOADING_ALL_POKEMON:
      return {load: true};
    case RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON, RECEIVE_POKEMON:
      return {load: false};
    default:
      return state;
  }
}

export default loadingReducer;

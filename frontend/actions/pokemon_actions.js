import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveErrors = (err) => ({
  type: RECEIVE_ERRORS,
  err
})

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};

export const createPokemon = (pokemon) => (dispatch) => {
  let that = pokemon;
  return APIUtil.createPokemon(pokemon)
    .then(
      pokemon => {
      dispatch(receiveSinglePokemon(pokemon))
      return pokemon;
      },
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

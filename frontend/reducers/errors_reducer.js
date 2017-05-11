import { RECEIVE_ERRORS } from '../actions/pokemon_actions'

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.err;
    default:
      return state;
  }
}

export default errorsReducer;

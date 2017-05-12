import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon, requestSinglePokemon, requestUpdatePokemon } from '../../actions/pokemon_actions'

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(createPokemon(pokemon)),
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
  requestUpdatePokemon: (pokemon) => dispatch(requestUpdatePokemon(pokemon))
})

const mapStateToProps = (state) => ({
  errors: state.errors,
  pokemon: state.pokemonDetail
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);

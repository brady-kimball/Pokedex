import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  componentDidMount() {
    if (this.props.match.path === "/pokemon/:pokemonId/edit") {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId).then(this.initializeState.bind(this))
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "bug",
      attack: "",
      defense: "",
      moves: []
    };
  }

  initializeState() {
    if (this.props.match.path === "/pokemon/:pokemonId/edit") {
      let poke = this.props.pokemon;
      this.setState({
        name: poke.name,
        image_url: poke.image_url,
        poke_type: poke.poke_type,
        attack: poke.attack,
        defense: poke.defense,
        moves: poke.moves
      });
    } else {
      this.setState({
        name: "",
        image_url: "",
        poke_type: "bug",
        attack: "",
        defense: "",
        moves: []
      })
    }
  }

  errors() {
    if (this.props.errors[0]) {
      return(
        <ul className="errors">
          {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      )
    } else {
      return null;
    }

  }

  updatePokemon(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  updateMoves(moveIdx) {
    return e => {
      let moves = this.state.moves;
      moves[moveIdx] = e.target.value;
      this.setState({
          moves
      });
    };
  }

  buttonText() {
    return (this.props.match.path === "/pokemon/:pokemonId/edit") ? "Update Pokemon" : "Create Pokemon"
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.match.path === "/pokemon/:pokemonId/edit") {
      this.props.requestUpdatePokemon(Object.assign({}, this.state, {id: this.props.pokemon.id})).then(editedPokemon => {
        this.props.history.push(`pokemon/${editedPokemon.id}`);
      });
    } else {
      this.props.createPokemon(this.state).then(newPokemon => {
        this.props.history.push(`pokemon/${newPokemon.id}`);
      });
    }
  }

  render() {
    let typeOptions = window.POKEMON_TYPES.map((type) => (
      <option key={type} value={type}>{type}</option>
    ));
    return(
      <section>
        <img src="/assets/pokemon-logo.svg" alt="Copyright of Nintendo Pokemon" />
        {this.errors()}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input  type="text"
            value={this.state.name}
            onChange={this.updatePokemon("name").bind(this)}
            placeholder="Name"/>
          <input  type="text"
            value={this.state.image_url}
            onChange={this.updatePokemon("image_url").bind(this)}
            placeholder="Image Url"/>
          <select onChange={this.updatePokemon("poke_type").bind(this)}
            value={this.state.poke_type}>
            {typeOptions}
          </select>
          <input  type="text"
            value={this.state.attack}
            onChange={this.updatePokemon("attack").bind(this)}
            placeholder="Attack"/>
          <input  type="text"
            value={this.state.defense}
            onChange={this.updatePokemon("defense").bind(this)}
            placeholder="Defense"/>
          <input  type="text"
            value={this.state.moves[0] || ""}
            onChange={this.updateMoves(0).bind(this)}
            placeholder="Move 1"/>
          <input  type="text"
            value={this.state.moves[1] || ""}
            onChange={this.updateMoves(1).bind(this)}
            placeholder="Move 2"/>
          <button>{this.buttonText()}</button>
        </form>
      </section>
    )
  }
}

export default withRouter(PokemonForm);

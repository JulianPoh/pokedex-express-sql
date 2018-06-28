var React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <html>
        <head>EDIT A POKEMON</head>
        <body>
          <h4>EDITING:{this.props.pokemon.name}</h4>
          <form className="pokemon-form" method="POST" action={"/pokemons/edit/"+ this.props.pokemon.id + "/edit?_method=PUT"}>
            <div className="pokemon-attribute">
              <input name="id" type="text" defaultValue={this.props.pokemon.id}/>
            </div>
            <div className="pokemon-attribute">
              <input name="num" type="text"defaultValue={this.props.pokemon.num}/>
            </div>
            <div className="pokemon-attribute">
              <input name="name" type="text" defaultValue={this.props.pokemon.name}/>
            </div>
            <div className="pokemon-attribute">
              <input name="img" type="text" defaultValue={this.props.pokemon.img}/>
            </div>
            <div className="pokemon-attribute">
              <input name="height" type="text" defaultValue={this.props.pokemon.height}/>
            </div>
            <div className="pokemon-attribute">
              <input name="weight" type="text" defaultValue={this.props.pokemon.weight}/>
            </div>
            <input name="submit" type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit;

var React = require("react");

class Pokemon extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div>
            <ul className="pokemon-list">
              <li className="pokemon-attribute">
                ID: {this.props.pokemon.id}
              </li>
              <li className="pokemon-attribute">
                Num: {this.props.pokemon.num}
              </li>
              <li className="pokemon-attribute">
                <h1>{this.props.pokemon.name}</h1>
              </li>
              <li className="pokemon-attribute">
                <img src={this.props.pokemon.img}/>
              </li>
              <li className="pokemon-attribute">
                Height: {this.props.pokemon.height}
              </li>
              <li className="pokemon-attribute">
                Weight: {this.props.pokemon.weight}
              </li>
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Pokemon;

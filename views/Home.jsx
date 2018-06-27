var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Welcome to the Pokedex</h1>
          <ul>
            {this.props.pokemon.map(pokemon => (
              <li key={pokemon.id}>
                {pokemon.name}<img src={pokemon.img}/>
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;

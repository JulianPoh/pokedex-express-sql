var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
        <h3>CREATE A NEW POKEMON!</h3>
          <form className="pokemon-form" method="POST" action="/pokemons">
            <div className="pokemon-attribute">
              <input name="id" type="text" placeholder="New Pokemon ID"/>
            </div>
            <div className="pokemon-attribute">
              <input name="num" type="text" placeholder="New Pokemon Num"/>
            </div>
            <div className="pokemon-attribute">
              <input name="name" type="text" placeholder="New Pokemon Name"/>
            </div>
            <div className="pokemon-attribute">
              <input name="img" type="text" placeholder="New Pokemon Image"/>
            </div>
            <div className="pokemon-attribute">
              <input name="height" type="text" placeholder="New Pokemon Height"/>
            </div>
            <div className="pokemon-attribute">
              <input name="weight" type="text" placeholder="New Pokemon Weight"/>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;

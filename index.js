const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'julian',
  host: '127.0.0.1',
  database: 'pokemons',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/', (req, response) => {
  // query database for all pokemon
  // respond with HTML page displaying all pokemon
  const queryString = 'SELECT * from pokemon'
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('query error:', err.stack);
    } else {
      console.log('query result:', result);
      let pokemon = result.rows;
      response.render( 'Home', {pokemon: pokemon} );
    }
  });
});


/*
 * ===================================
 * GET POKEMON BY ID
 * ===================================
*/
app.get('/pokemon/:id', (request, response) => {
    let pokeId = request.params.id;
    let queryText = 'SELECT * FROM pokemon WHERE id = $1';
    const values = [pokeId];
    pool.query(queryText, values, (err, queryResult) => {
        if( err ){
          console.log( err.message );
          response.status(500).send("error: "+err.message);
        }else{
          console.log( queryResult.rows[0].name);
          response.render('Pokemon', {pokemon: queryResult.rows[0]});
        }
    })
});

/*
 * ===================================
 * CREATE NEW POKEMON
 * ===================================
*/
app.get('/new', (request, response) => {
  // respond with HTML page with form to create new pokemon
  response.render('New');
});

app.post('/pokemon', (req, response) => {
  let params = req.body;

  const queryString = 'INSERT INTO pokemon(id, num, name, img, height, weight) VALUES($1, $2, $3, $4, $5, $6)'
  const values = [params.id, params.num, params.name, params.img, params.height, params.weight];
  pool.query(queryString, values, (err, res) => {
    if (err) {
      console.log('query error:', err.stack);
    } else {
      console.log('query result:', res);
      // redirect to home page
      response.redirect('/');
    }
  });
});


/*
 * ===================================
 * EDIT POKEMON
 * ===================================
*/
app.get('/pokemon/:id/edit', (request, response) => {
  response.render('Edit');
});

app.post('/:id', (req, response) => {
  let params = req.body;

  const queryString = 'UPDATE pokemon SET name=$1, img=$2, height=$3, weight=$4'
  const values = [params.name, params.img, params.height, params.weight,];
  pool.query(queryString, values, (err, res) => {
    if (err) {
      console.log('query error:', err.stack);
    } else {
      console.log('query result:', res);
      // redirect to home page
      response.redirect('/');
    }
  });
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

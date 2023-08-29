// import routes and express
const routes = require('./routes');
const express = require('express');
// creates express server
const app = express();  
// set port
const PORT = 3001;
// parse incoming string or array data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

// sets listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
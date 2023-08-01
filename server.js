// DEPENDENCIES
const express = require('express');

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads');
  });
  
// Breads
const breadsController = require('./controllers/breads_controllers');
app.use('/breads', breadsController);
  
// LISTEN
app.listen(PORT, () => {
  console.log('This is my terminal', PORT);
});

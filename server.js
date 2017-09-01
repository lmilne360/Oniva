const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to build folder 'www'
app.use(express.static(path.resolve(__dirname, 'www')));

// Set our API routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'www/index.html'));
});

// Set port
app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), () => {
  console.log('listening to Port', app.get('port'));
});

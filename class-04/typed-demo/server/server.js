// ANTOINE
'use strict';

const express = require('express');
const app = express();

const clothesRouter = require('./routes/clothesRoute');
const foodRouter = require('./routes/foodRoute');
const apiRouter = require('./routes/api.js');


app.use(express.json());

// 9:30
// TRAY CHEA
// do we need to have routes for each model?

// 9:34
// do these need their own files

// // define routes for model 1
// app.get('/clothes');
// app.get('/clothes');
// app.post('/clothes');
// app.put('/clothes');
// app.delete('/clothes');
app.use('/clothes', clothesRouter);

// // define routes for model 2
// app.get('/food');
// app.get('/food');
// app.post('/food');
// app.put('/food');
// app.delete('/food');
app.use('/food', foodRouter);

app.use('./api', (req, res) => {
  console.log(req.method);
  res.send('OK');
});


// ALEX GRAZDA
// QUESTION - Do we need to set up our error handlers at this point?

// ALEXANDER BEERS
// Not yet

// ANTHONY MORTON
// create models folder & model.js

module.exports = (
  app,
  start: (port) => {
    app.listen(port, () => console.log('server is up on ' + port));
  }
);

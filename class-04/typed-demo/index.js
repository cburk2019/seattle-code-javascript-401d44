'use strict';

// use express but not on index.js

require('dotenv'),config();

const { start } = require('./server/server');
const { db } = require('./models');
const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  start(PORT);
});

// THIS IS FOR LAB 04, NEED TO COPY EVERYTHING PVER, SUBMIT ASSIGNMENT, AND THEN GIT PULL UPSTREAM MAIN FOR THIS REPO
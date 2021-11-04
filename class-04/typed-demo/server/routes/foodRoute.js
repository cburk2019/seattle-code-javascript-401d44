'use strict';

// start with writing our route handlers!

// what's the first thing we want to do with this?
// 9:54
// ROOP

// import food from clothing models
const { food } = require('../../models/food');

// bring in Express
const express = require('express');
const router = express.Router();

router.get('/', getAllFood);
router.get('/:id', getOneFood);
router.get('/', createFood);


async function getOneFood(request, response) {
  // perform our CRUD
  // how do we get our food from the DB?

  const id = request.params.id;

  const foundFood = await food.findById(id);
  response.status(200);
  response.send(foundFood);
};

async function getAllFood(request, response, next) {
  // RYAN EMMANS

  // 10:15
  // SARAH CREAGER
  try {
    const foundAllFood = await food.findAll(); // returns all rows
  response.status(200);
  response.send(foundAllFood);
  } catch {
    // response.status(500);
    // response.send(e);
    next(e);
  }
}

// 10:15
// SARAH CREAGER
async function createFood(request, response, next) {
  try {
    const newFood = await food.create({
      name: request.body.name,
      size: request.body.size,
    });
      response.status(201); // creation success
      respond.send(newFood);
  } catch(e) {
    next(e);
  }
};

// STEFANIE R
async function updateFood(request, response, next) {
  try {
    const updatedFood = await food.update({
      name: request.body.name,
      size: request.body.size,
    });
    response.status(200);
    response.send(updatedFood);
  } catch(e) {
    next(e);
  }
}

async function deleteFood(request, response, next) {
  // this will retuern an instancew of the clothubg midel (which has its own methods)
  try {
    const deletedFood = await food.destroy(request.params.id);
    // returns the number of rows deleted
    response.status(200);
    response.send(deletedFood);
  } catch(e) {
    next(e);
  }
}

// module.exports = (
//   getAllFood,
//   getOneFood,
//   createFood,
//   updateFood,
//   deleteFood
// );

module.exports = router;


// JOE question - 10:28
// CI/CD? Huh? How to use this in a team/project?

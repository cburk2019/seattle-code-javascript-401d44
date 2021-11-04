'use strict';

// start with writing our route handlers!

// what's the first thing we want to do with this?
// 9:54
// ROOP

// import clothes from clothing models
const { clothes } = require('../../models/clothes');

// bring in Express
const express = require('express');
const router = express.Router();

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.get('/', createClothes);
router.get('/:id', updateClothes);
router.get('/', deleteClothes);


async function getOneClothes(request, response) {
  // perform our CRUD
  // how do we get our clothes from the DB?

  const id = request.params.id;

  const foundClothes = await clothes.findById(parseInt(id));
  response.status(200);
  response.send(foundClothes);
};

async function getAllClothes(request, response, next) {
  // RYAN EMMANS

  // 10:15
  // SARAH CREAGER
  try {
    const foundAllClothes = await clothes.findAll(); // returns all rows
  response.status(200);
  response.send(foundAllClothes);
  } catch {
    // response.status(500);
    // response.send(e);
    next(e);
  }
}

// 10:15
// SARAH CREAGER
async function createClothes(request, response, next) {
  try {
    const newClothes = await clothes.create({
      name: request.body.name,
      size: request.body.size,
    });
      response.status(201); // creation success
      respond.send(newClothes);
  } catch(e) {
    next(e);
  }
};

// STEFANIE R
async function updateClothes(request, response, next) {
  try {
    const updatedClothes = await clothes.update({
      name: request.body.name,
      size: request.body.size,
    }, { where: { id: request.params.id } });
    response.status(200);
    response.send(updatedClothes);
  } catch(e) {
    next(e);
  }
}

async function deleteClothes(request, response, next) {
  // this will retuern an instancew of the clothubg midel (which has its own methods)
  try {
    const deletedClothes = await clothes.destroy(request.params.id);
    // returns the number of rows deleted
    response.status(200);
    response.send(deletedClothes);
  } catch(e) {
    next(e);
  }
}

// module.exports = (
//   getAllClothes,
//   getOneClothes,
//   createClothes,
//   updateClothes,
//   deleteClothes
// );

module.exports = router;


// JOE question - 10:28
// CI/CD? Huh? How to use this in a team/project?

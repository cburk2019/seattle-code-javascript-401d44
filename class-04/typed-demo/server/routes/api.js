'use strict';

const express = require('express');
const router = express.Router();

const { messages, channels } = require('../../models');

const modelMap = ({
  messages: new Collection(messages),
  channels: new Collection(channels),
});

const Collection = require('../../models/library/Collection.js');

// what model am I trying to access right here?
router.use('./:model', function(req, res, next) {

  const model = modelMap[req.params.model];
  const method = request.method

  console.log(req.params);
  if(!model) {
    next('No model found');
  }

  req.model = model;
  next();

  // // what is req.method
  // switch(method) {

  //   case 'GET':
  //   model.read(req.params.id);
  //   break;

  //   case 'POST':
  //   model.create(req.body);
  //   break;

  //   case 'PUT':
  //   model.update(req.params.id, req.body);
  //   break

  //   case 'DELETE':
  //   model.delete(req.params.id);
  //   break

  //   default:
  //     next('Model Router Error');
  // }

});

router.get(':/model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read();
  res.send(records);
});

router.get(':/model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.read(req.params.id);
  res.send(record);
});

router.post(':/model', async (req, res, next) => {
  const model = req.model;
  const json = req.body;
 let newRecord = await mnodel.create(json)
 res.send(newRecord);
});

module.exports = Collection;
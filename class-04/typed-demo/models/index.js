'use strict';

// What type of data are we making??
// 9:25am
// BRIAN KASPRZYK
// We are making sequelize models
// clothes and food

// 9:27am
// BRYCE PFINGSTON

// const clothes = sequalize.define();
// do we want to make these their own files?

// 9:28am
// CAMERON WALKDEN
// yes, make own files

const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

const channelModel = require('./channel.js');
const messageModel = require('./message.js');

const { Sequelize, DataTypes } = require('sequelize');

// instanctiate our instance on sequelize
// pass ing database url

const sequelize = new Sequelize('sqlite:mnemory');

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const messages = messageModel(sequelize, DataTypes);
const channels = channelModel(sequelize, DataTypes);

// these models will not work with another database technology
channels.hasMany(messages, { foreignKey: 'channelID', sourceKey: 'id' });
messages.belongs(channels, { foreignKey: 'channelId', targetKey: 'id' });

module.exports = {
  db: sequelize,
  food,
  clothes,
}

// set up our sequelize

// 9:51
// MARQUESSA
// What to do next?

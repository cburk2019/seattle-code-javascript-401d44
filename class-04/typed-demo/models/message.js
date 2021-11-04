'use strict';

const message = (sequelize, DataTypes) => sequelize.define('message', {
  words: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  channel: {
    type: DataTypes.STRING,
    // type: DataTypes.UUID,
    // defaultValue: sequelize.UUID(),
    allowNull: true,
  }
});

module.exports = channel;

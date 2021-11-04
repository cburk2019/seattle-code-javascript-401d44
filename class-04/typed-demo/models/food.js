'use strict';

const food = (sequelize, DataType) => sequelize.define('food', {
  type: {
    type: DataType.STRING,
    allowNull: false,
  },
  calories: {
    type: DataType.INTEGER,
    allowNull: false,
  }
}); // name our table "food"

module.exports = food;

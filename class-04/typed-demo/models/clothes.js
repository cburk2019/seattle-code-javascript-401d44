'use strict';

// what belongs on clothing data
// define the clothing 'table' and 2 columns
const clothes = (sequelize, DataType) => sequelize.define('clothes', {
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  size: {
    type: DataType.ENUM('s', 'm', 'l', 'xl'),
    allowNull: true,
  }
}); // name our table "clothes"

module.exports = clothes;


// 9:53
// Marquessa
// What's the first thing we want to do with this?
function getClothes() {

}
const { DataTypes } = require('sequelize');
const db = require('../db/database');
const Car = require('./car');
const User = require('./user');

const CarActualOwner = db.define(
  'CarActualOwners',
  {
    dni: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'dni',
      },
    },
    patent: {
      type: DataTypes.STRING,
      references: {
        model: Car,
        key: 'patent',
        unique: true,
      },
    },
}
);

module.exports = CarActualOwner;

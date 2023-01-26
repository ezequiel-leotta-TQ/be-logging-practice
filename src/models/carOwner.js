const { DataTypes } = require('sequelize');
const db = require('../db/database');
const Car = require('./car');
const User = require('./user');

const CarOwner = db.define(
  'CarOwners',
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
      },
    },
    since: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CarOwner;

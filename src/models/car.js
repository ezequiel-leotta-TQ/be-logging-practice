const { DataTypes } = require('sequelize');
const db = require('../db/database');
const User = require('./user');

const Car = db.define(
  'Cars',
  {
    patent: {
      type: DataTypes.STRING,
      unique: true,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    actualOwner: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'dni',
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Car;

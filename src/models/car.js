const { DataTypes } = require('sequelize');
const db = require('../db/database');

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
  },
  {
    timestamps: true,
  }
);

module.exports = Car;

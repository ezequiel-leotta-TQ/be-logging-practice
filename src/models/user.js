const { DataTypes } = require('sequelize');
const db = require('../src/db/database');

const User = db.define('Users', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = User;

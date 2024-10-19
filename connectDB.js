const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.Database, process.env.User, process.env.Password, {
  host: process.env.Host,
  dialect: 'mysql', 
  logging: false,   
});

module.exports = sequelize;


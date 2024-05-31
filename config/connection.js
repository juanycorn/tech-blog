require('dotenv').config(); // Load environment variables from .env file

const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

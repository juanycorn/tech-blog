const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection to the database using environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
// Import Sequelize and dotenv for environment variable configuration
const Sequelize = require('sequelize');
require('dotenv').config();

// Set up Sequelize instance with database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

// Export the sequelize instance for use in other parts of the application
module.exports = sequelize;
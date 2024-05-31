const { Sequelize } = require('sequelize');

// Parse the DATABASE_URL environment variable
const { hostname, username, password, port, pathname } = new URL(process.env.DATABASE_URL);

// Initialize Sequelize with the parsed connection details
const sequelize = new Sequelize(
  pathname.slice(1),
  username,
  password,
  {
    host: hostname,
    port: port,
    dialect: 'mysql' // Your database dialect (e.g., mysql)
    // Other Sequelize options...
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

const { User } = require('../models');

const userData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
];

User.bulkCreate(userData)
  .then(() => {
    console.log('Seed data inserted into User table');
  })
  .catch((err) => {
    console.error('Error inserting seed data into User table:', err);
  });

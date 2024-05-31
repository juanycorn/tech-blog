const { Post } = require('../models');

const postData = [
  { title: 'Post 1', content: 'Content for post 1', UserId: 1 },
  { title: 'Post 2', content: 'Content for post 2', UserId: 2 },
];

Post.bulkCreate(postData)
  .then(() => {
    console.log('Seed data inserted into Post table');
  })
  .catch((err) => {
    console.error('Error inserting seed data into Post table:', err);
  });

// Import necessary modules
const { Comment } = require('../models');

// Seed data for comments
const commentData = [
  {
    // Add comment_text field with some sample text
    comment_text: 'This is a sample comment for post 1.',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    // Add comment_text field with some sample text
    comment_text: 'This is another sample comment for post 1.',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    // Add comment_text field with some sample text
    comment_text: 'This is a sample comment for post 2.',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

// Function to seed comment data
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;


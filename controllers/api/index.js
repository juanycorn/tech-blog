// Import necessary modules and routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Use user routes for /users path
router.use('/users', userRoutes);

// Use post routes for /posts path
router.use('/posts', postRoutes);

router.use('/comment', commentRoutes)
// Export router for use in main index.js
module.exports = router;

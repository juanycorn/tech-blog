// Import necessary modules and routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashboardRoutes');

// Use home routes for base path
router.use('/', homeRoutes);

// Use API routes for /api path
router.use('/api', apiRoutes);

router.use('/dashboard', dashboardRoutes);

// Export router for use in server.js
module.exports = router;

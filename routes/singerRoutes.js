const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Test Route
router.get('/test',controllers.singers.test);

// Create Route
router.post('/', controllers.singers.create);

// Find Singer By Name Route
router.get('/', controllers.singers.find)

module.exports = router;
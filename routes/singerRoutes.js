const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Test Route
router.get('/test',controllers.singers.test);

// Create Route
router.post('/', controllers.singers.create);

// Find Singer By Name Route
router.get('/', controllers.singers.find)

// Delete All Matching Records
router.delete('/', controllers.singers.destroy);

// Delete Many
router.delete('/many', controllers.singers.destroyMany);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/test',controller.singers.test);

router.post('/', controller.singers.create);

module.exports = router;
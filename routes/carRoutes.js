const express = require('express');
const router = express.Router();
const carController = require('../controller/carController.js');

router.get('/', carController.getCars);

module.exports = router;

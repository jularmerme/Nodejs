const express = require('express');
const router = express.Router();
const myController = require('../Controllers/myController');

router.post('/user', myController.myMethod);

module.exports = router;

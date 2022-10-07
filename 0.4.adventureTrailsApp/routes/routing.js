const express = require('express');

const routing = express.Router();
const packagesController = require('../controllers/packages');
const bookController = require('../controllers/bookpackage');

routing.get('/packages', packagesController.getPackages);
routing.get('/bookpackage', bookController.getBookPackage);
routing.all('*', packagesController.invalid);

module.exports = routing;

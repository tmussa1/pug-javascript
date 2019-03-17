var express = require('express');
var router = express.Router();
var productsDB = require('.././model/productsDB');

router.get('/', function(req, res, next) {
  res.render('index', { listOfProducts: productsDB.products});
});

module.exports = router;

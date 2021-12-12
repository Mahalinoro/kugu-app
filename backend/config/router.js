const conn = require("./db");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require("../models/product");
const bodyParser = require('body-parser');


router.get('/items', async (req, res) => {
  await Product.find({})
  .then((data) => res.send(data));
});


router.get('/item:id', (req, res) => {

});


module.exports = router;
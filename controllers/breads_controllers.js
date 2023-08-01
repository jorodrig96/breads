const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');
const Index = require('../views /index.jsx');

//INDEX

breads.get('/', (req,res) => {
  res.render('Index', 
    {
      breads: Bread,
      title: 'Index page'
    });
});


module.exports = breads;




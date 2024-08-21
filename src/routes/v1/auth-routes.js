const express = require('express');
const router = module.exports = express.Router({mergeParams: true});

router.get('/login', (req, res) => {
  res.send('Login API');
});
  
router.get('/logout', (req, res) => {
  res.send('Logout API');
});
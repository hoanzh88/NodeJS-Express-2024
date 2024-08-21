const express = require('express');
const router = module.exports = express.Router({mergeParams: true});

// List brands
router.get('/list', (req, res) => {
  res.send('List Brands API');
});

// Create brand
router.post('/create', (req, res) => {
  res.send('Create Brand API');
});

// Update brand
router.put('/update/:id', (req, res) => {
  res.send(`Update Brand API for ID ${req.params.id}`);
});

// Delete brand
router.delete('/delete/:id', (req, res) => {
  res.send(`Delete Brand API for ID ${req.params.id}`);
});
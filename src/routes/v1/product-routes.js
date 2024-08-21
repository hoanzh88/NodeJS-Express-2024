const express = require('express');
const router = module.exports = express.Router({mergeParams: true});

// List products
router.get('/list', (req, res) => {
  res.send('List Products API');
});

// Create product
router.post('/create', (req, res) => {
  res.send('Create Product API');
});

// Update product
router.put('/update/:id', (req, res) => {
  res.send(`Update Product API for ID ${req.params.id}`);
});

// Delete product
router.delete('/delete/:id', (req, res) => {
  res.send(`Delete Product API for ID ${req.params.id}`);
});

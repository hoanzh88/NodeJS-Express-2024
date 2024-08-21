const express = require('express');
const router = module.exports = express.Router({mergeParams: true});
const pool = require('../../config/database');
const { verifyToken } = require('../../helpers/auth.helper');
const { checkPermission  } = require('../../helpers/permission.helper');

// List products async & await
router.get('/list', verifyToken, async (req, res) => {
  // res.send('List Products API');
  try {
    const [rows] = await pool.query('SELECT * FROM product LIMIT 10');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database query error.' });
  }
});

router.get('/list2', verifyToken, checkPermission('view_products'), (req, res) => {
  pool.query('SELECT * FROM product LIMIT 10')
    .then(([rows]) => {
      res.json(rows);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Database query error.' });
    });
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

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/product', productController.getAllProducts);

// @route   GET api/products/:id
// @desc    Get a single product by ID
// @access  Public
router.get('/product/:id', productController.getProductById);

// @route   POST api/products
// @desc    Create a new product
// @access  Private (example: only admin can create products)
router.post('/product', productController.createProduct);

// @route   PUT api/products/:id
// @desc    Update a product by ID
// @access  Private (example: only admin can update products)
router.put('/product/:id', productController.updateProductById);

// @route   DELETE api/products/:id
// @desc    Delete a product by ID
// @access  Private (example: only admin can delete products)
router.delete('/product/:id', productController.deleteProductById);

module.exports = router;


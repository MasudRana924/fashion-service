const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')


// Product get & post
router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)

//Searching by Product 
router.route('/:id')
    .get(productController.getSingleProduct)

module.exports = router;
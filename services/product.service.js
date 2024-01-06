const Product = require('../models/Product')

// Get product service
exports.getProductService = async () => {
    const products = await Product.find({})
    return products;
}

// Get product by id
exports.getSingleProductService = async (productId) => {
  
    const product = await Product.findById(productId)
    return product;
}


// Post product service
exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}


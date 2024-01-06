
const mongoose = require('mongoose');

// Schema Design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, Provide a name for this product."],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large"],
    },
    imageUrl: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"],
    },

    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        },
        message: "Quantity must be integer"
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be {VALUE}",
        }
    },


}, {
    timestamps: true,
})


// Mongooes middelware for saving data: pre / post

// pre method
productSchema.pre('save', function (next) {
    console.log('Before saving data');
    if (this.quantity == 0) {
        this.status = 'Out-of-stock'
    }
    next()
})



// Model
const Product = mongoose.model('Product', productSchema)

module.exports = Product;
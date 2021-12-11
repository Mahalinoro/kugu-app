const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        validate(val) {
            if (val <= 0) throw new Error('Price cannot be negative');
        }
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sellerID: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
        default: 'Available'
    },
    review: {
        type: Number,
        required: false,
    }    
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
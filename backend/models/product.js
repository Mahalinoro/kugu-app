const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb+srv://kuguapp:' + process.env.CLUSTER_KEY + '@kugu.9hsn3.mongodb.net/test?retryWrites=true&w=majority');
const productSchema = new mongoose.Schema({
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
    },
    review: {
        type: Number,
        required: false,
    },
    photos: {
        type: Array,
        required: false
    }

});

const Product = conn.model('products', productSchema);

module.exports = Product;
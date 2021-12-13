const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        required: true,
        type: String,
    },
    item:
       {
           type: Object,
       },
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

const Cart = mongoose.model('Carts', CartSchema);

module.exports = Cart;
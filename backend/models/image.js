const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
    name :{
        type: String,
    },
    img : {
        data: Buffer,
        contentType: String
    }
})

const Image = mongoose.model('images', imgSchema);

module.exports = Image;
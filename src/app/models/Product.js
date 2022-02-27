const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    id: {type: Number, unique:true, require: true },
    catalog_id: {type: Number, required: true},
    name: {type: String},
    price: {type: Number},
    content: {type: String},
    image_link: {type: String},
    view: {type: Number}
});

module.exports = mongoose.model('Product', Product, 'Products');
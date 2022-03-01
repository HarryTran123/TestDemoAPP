const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    catalog_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    productname: {type: String},
    price: {type: Number},
    content: {type: String},
    image_link: {type: String},
    view: {type: Number},
    slug: {type: String}
});

module.exports = mongoose.model('Products', Product, 'Products');
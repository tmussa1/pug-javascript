var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
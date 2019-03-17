var express = require('express');
var router = express.Router();
var productsDB = require('.././model/productsDB');

router.get('/', (req, res, next) =>{
    var listOfProducts = productsDB.products;
    res.render('products', listOfProducts);
    //res.send(listOfProducts);
    next();
});

router.post('/addProduct', (req, res, next)=>{
    var newProduct = {
        productId: req.body.productId,
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description
    };
    productsDB.products.push(newProduct);
    res.redirect('/products/');
});

module.exports = router;
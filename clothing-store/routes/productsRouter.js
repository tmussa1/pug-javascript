var multer = require('multer');
var upload = multer({dest : '/public/images'})
var express = require('express');
var router = express.Router();
var productsDB = require('.././model/productsDB');

router.get('/', (req, res, next) =>{
    res.render('products', {listOfProducts : productsDB.products});
    next();
});

router.post('/addProduct', upload.single('imageUrl'), (req, res, next)=>{
    var newProduct = {
        productId: req.body.productId,
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.file.filename
    };
    productsDB.products.push(newProduct);
    res.redirect('/products/');
});

module.exports = router;
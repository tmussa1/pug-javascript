var multer = require('multer');
var upload = multer({dest : 'public/images'})
var express = require('express');
var router = express.Router();
var Product = require('../model/products');

router.get('/', (req, res, next) =>{
    Product.find({}, (err, products)=>{
        if(err) {
            console.log(err);
        }
        res.send(products);
    });

   // res.render('products', {listOfProducts : products});
    next();
});

router.get('/:name', (req, res, next) =>{
    var name = req.param.name;

    Product.findOne({name : name}, (err, product)=>{
        if(err) {
            console.log(err);
        }
        res.json({
            name : product.name,
            price: product.price
        });
    });
    next();
});

router.post('/addProduct', upload.single('imageUrl'), (req, res, next)=>{
    
    var name  = req.body.name;
    var price = parseInt(req.body.price);
    var description = req.body.description;
    var imageUrl = "/static/images/" + req.file.filename;

    var newProduct = new Product({
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
    });

    newProduct.save(function(err){
        if(err){
            console.error.bind(err);
        } 
        res.redirect('/products/');
    });
});

module.exports = router;
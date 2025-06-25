const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');

router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index', {error ,loggedin: false});
});

router.get("/admin", isLoggedIn, async (req, res) => {
    
    res.render('admin');
});

router.get("/shop", isLoggedIn, async (req, res) => {
    let products = await productModel.find();
    let success = req.flash('success'); // <-- get flash message first
    res.render('shop', { products, success });
});

router.get("/cart", isLoggedIn, async (req, res) => {
   let user = await userModel
   .findOne({email: req.user.email})
   .populate('cart');

   
   let discount = 0;
   if(user.cart && user.cart.length > 0) {
       for (let item of user.cart) {
           if (item.discount) {
               discount += Number(item.discount);
            }
        }
    }
    
    // Calculate total amount of products in the cart
     let totalAmount = 0;
     if (user.cart && user.cart.length > 0) {
         for (let item of user.cart) {
             totalAmount += Number(item.price);
         }
     }
    // Calculate total price of products in the cart
let bill = 0;
if (user.cart && user.cart.length > 0) {
    for (let item of user.cart) {
        bill += Number(item.price) - Number(item.discount || 0);
    }
    bill += 20; // Add fixed value after summing all items
}

    res.render('cart', {user, bill,totalAmount , discount});
});

router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save()
    req.flash('success', 'Product added to cart');
    res.redirect('/shop');
});


router.get("/logout", isLoggedIn, (req, res) =>{
    res.render("shop");
});



module.exports = router;
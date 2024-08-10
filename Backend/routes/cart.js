const express = require('express');
const router = express.Router();
const Cart = require('../models/carts');

router.post('/', async(req, res)=>{
    const { name, productId, image,amount, price, userId} = req.body;
    try{
        const cart =  new Cart({name, productId, image, amount, price, userId});
        const newCart = await cart.save();
        res.status(200).json({cart: newCart});
    }
    catch(err){
        console.error("Server error", err)
        res.status(500)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const carts = await Cart.find({userId: req.params.id});
        if(carts){
            res.status(200).json(carts)
        }
        else{
            res.status(404).json({message: "Not Found"})
        }
    }
    catch(err){
        res.status(500).json({message: "server error"})
    }
})


module.exports = router;
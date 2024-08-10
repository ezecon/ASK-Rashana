const express = require('express');
const router = express.Router();
const Orders = require('../models/orders');

router.post('/', async(req, res)=>{
    const { userId, items, total, address} = req.body;
    try{
        const order =  new Orders({userId, items, total, address});
        const newOrder = await order.save();
        res.status(200).json({order: newOrder});
    }
    catch(err){
        console.error("Server error", err)
        res.status(500)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const order = await Orders.find({userId: req.params.id});
        if(order){
            res.status(200).json(order)
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
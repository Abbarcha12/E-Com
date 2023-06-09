import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js"


// Create new order
// @route post/api/products
// access public

const addOrderItems =asyncHandler(async (req,res)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        TotalPrice
    }= req.body
    if(orderItems && orderItems.length ===0){
        res.status(400)
        throw new Error('No order Items')
        return 
    }else{
        const order =new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,
            paymentMethod,
            itemPrice,
            taxPrice,
            shippingPrice,
            TotalPrice
        })
        const createdOrder =await order.save()

        res.status(201).json(createdOrder)
    }
})

// Create Get order by ID
// @route get/api/products
// access private

const getOrderById =asyncHandler(async (req,res)=>{
   const order  =await Order.findById(req.params.id).populate('user','name email')

   if(order){
    res.json(order)
   }else{
    res.status(404)
    throw new Error('Order not found')
   }
})
export {
    addOrderItems,
    getOrderById
}
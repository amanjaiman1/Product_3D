const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    tshirtId:{type:mongoose.Schema.ObjectId,ref:'Tshirt',required:true},
    userId:{type:mongoose.Schema.ObjectId,ref:'User',required:true},
    status:{type:String,default:'processing'},
    quantity:{type:Number,default:1},
    totalAmount:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now}
});
const OrderModel = mongoose.model('Order',orderSchema)
module.exports = OrderModel
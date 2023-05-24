const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    tshirtId:{type:mongoose.Schema.ObjectId,ref:'Tshirt',required:true},
    userId:{type:mongoose.Schema.ObjectId,ref:'User',required:true},
    orderId:{type:mongoose.Schema.ObjectId,ref:"Order",required:true},
    status:{type:String,default:"pending"},
    paymentMethod:{type:String},
    totalAmount:{type:String},
    createdAt:{type:Date,default:Date.now}
});
const PaymentModel = mongoose.model('Payment',paymentSchema)
module.exports = PaymentModel
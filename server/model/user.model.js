const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    googleId:{type:String},
    firstName:{type:String,required:true},
    lastName:{type:String},
    profile:{type:String},
    currentAddress:{type:Number,default:0},
    mobile:{type:Number},
    countryCode:{type:String},
    address:[{
        street:{type:String},
        city:{type:String},
        state:{type:String},
        country:{type:String},
        pincode:{type:Number}
    }],
    hashedPassword:{type:String,required:true},
    authToken:{type:String},
    createdAt:{type:Date,default:Date.now}
});
const UserModel = mongoose.model('User',userSchema)
module.exports = UserModel
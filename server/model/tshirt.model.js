const mongoose = require('mongoose')
const tshirtSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId,required:true,ref:'User'},
    design:{
        size:{type:Number},
        color:{type:String},
        isLogoTexture:{type:Boolean},
        isFullTexture:{type:Boolean},
        logoDecal:{type:String},
        fullDecal:{type:String},
    },
    price:{type:Number,default:0.0},
    createdAt:{type:Date,default:Date.now}
});
const TshirtModel = mongoose.model('Tshirt',tshirtSchema)
module.exports = TshirtModel
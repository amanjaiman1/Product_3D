const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL)
.then(result=>{
    console.info("[DB Connected]");
})
.catch(err=>{
    console.error(err);
})
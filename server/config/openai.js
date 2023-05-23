require('dotenv').config({path:'../.env'})
const {Configuration} = require('openai')
module.exports.config = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});
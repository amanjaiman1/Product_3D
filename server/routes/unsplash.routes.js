const { getImage, getUnsplash }  = require('../controller/unsplash.controller')
const express = require('express')
const unsplashRouter = express.Router()

unsplashRouter.get('/',getUnsplash)

unsplashRouter.post('/',getImage)

module.exports = unsplashRouter 

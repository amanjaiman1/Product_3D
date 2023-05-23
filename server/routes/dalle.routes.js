const { getImage, getDalle }  = require('../controller/dalle.controller')
const express = require('express')
const dalleRouter = express.Router()

dalleRouter.get('/',getDalle)

dalleRouter.post('/',getImage)

module.exports = dalleRouter 
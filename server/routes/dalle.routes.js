const express = require('express');
const dotenv = require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const axios = require('axios');
const { createClient } = require('pexels');
const router = express.Router();


async function imageGenerator_dalle(query) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);

  try {
    const response = await openai.createImage({
      query,
      n: 1,
      size: '1024x1024'
    });
    const image = response.data.data[0].b64_json;

    return image; // return only one image in base64 formate 
  } catch (error) {
    console.error("Gandi cheezein search na kar");
    console.log(error)
    return "error";
  }

}

async function imageGenerator_pexels(query) { // type = 2
  return new Promise((resolve, reject) => {
    try {
      const client = createClient(process.env.PEXELS_API_KEY);
      const searchQuery = query;
      client.photos.search({ query: searchQuery, per_page: 5 }).then(photos => {
        let imageArray = [];
        for (let i = 0; i < 5; i++) {
          imageArray.push(photos.photos[i].src)
        }
        resolve(imageArray); // return 5 types of varient of image
      });
    } catch (error) {
      console.log(error)
      reject("error");
    }
  })
}

async function imageGenerator_unsplash(query) {
  return new Promise(async (resolve, reject) => {
    try {
      let imageArray = [];
      const apiKey = process.env.UNSPLASH_API_KEY;
      const searchQuery = query;
      let response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          'Authorization': `Client-ID ${apiKey}`
        },
        params: {
          query: searchQuery,
          per_page: 5 // Number of results to retrieve
        }
      })
      for (let i = 0; i < 5; i++) {
        imageArray.push(response.data.results[i].urls)
      }
      resolve(imageArray) // return 5 types of varient of image
    } catch (error) {
      console.log(error)
      reject("error")
    }
  })

}



router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  const { prompt } = req.body;
  const type = Number(req.query.type) || 1;   //  take type in a query ex(type = 1,2,3 any one)

  switch (type) {
    case 1:
      // This Case for dalle   #default case type = 1
      let image = imageGenerator_dalle(prompt);
      if (image != "error") {
        res.status(200).json({ photo: image });
      } else {
        res.status(500).json({ message: "Something went wrong" })
      }
      break;


    case 2:
      // This case for pexels type = 2

      let imageArray = await imageGenerator_pexels(prompt);
      if (imageArray != "error") {
        res.status(200).json({ photos: imageArray }); // return array of five images
      } else {
        res.status(500).json({ message: "Something went wrong" })
      }
      break;

    case 3:
      // This case for unsplash type = 3
      let imageArray2 = await imageGenerator_unsplash(prompt);
      if (imageArray2 != "error") {
        res.status(200).json({ photos: imageArray2 }); // return array of five images
      } else {
        res.status(500).json({ message: "Something went wrong" })
      }
      break;
  }

})

module.exports = router;
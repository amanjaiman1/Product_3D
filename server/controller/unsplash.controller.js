const browserApi = require('../config/unsplash.config') 
exports.getUnsplash = async (req,res) => { 
    try{
        res.status(200).json({message:"Unsplash API working ✈️"});
    }catch(err){
         console.error(err);
         res.status(500).json({ message: "Something went wrong",error:err})
    }
}

exports.getImage = async (req,res) => { 
    try{
        const { prompt } = req.body;
        const photos = await browserApi.search.getPhotos({query:prompt,page:1,perPage:5});
        const images = photos.response.results.map(e=>e.urls.raw)
        res.status(200).json({ data: images });
    }catch(err){
         console.error(err);
         res.status(500).json({ message: "Something went wrong",error:err})
    }
}
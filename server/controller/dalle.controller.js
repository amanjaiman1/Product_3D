const config = require('./../config/openai')
const {OpenAIApi} = require('openai');
const openai = new OpenAIApi(config);  

exports.getDalle = async (req,res) => { 
    try{
        res.status(200).json({message:"Dalle API working ✈️"});
    }catch(err){
         console.error(err);
         res.status(500).json({ message: "Something went wrong",error:err})
    }
}

exports.getImage = async (req,res) => { 
    try{
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format:"b64_json"
        });
        console.log("[OPEN API PROMPT]",response);
        const image = response.data.data[0].b64_json;
        res.status(200).json({ photo: image });
    }catch(err){
         console.error(err);
         res.status(500).json({ message: "Something went wrong",error:err})
    }
}
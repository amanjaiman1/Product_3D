const { Tshirt } = require("../model");

exports.getTshirts = async (req, res) => {
  try {
    var tshirts = await Tshirt.find({})
    .select('-hashedPassword')
    .select('-__v');
    res.status(200).json(tshirts);
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀" ,error:error});
    res.status(500).json({ messsage: "Something went wrong 💀" })
  }
};

exports.getTshirt = async (req, res) => {
  try {
    const { tshirtId } = req.body;
    var tshirt = await Tshirt.findById(tshirtId)
    .select('-hashedPassword')
    .select('-__v');
    res.status(200).json(tshirt);
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀" ,error:error});
    res.status(500).json({ messsage: "Something went wrong 💀" })
  }
};

exports.addTshirt = async (req, res) => {
  try {
    const {password } = req.body;
    delete req.body.password
    var tshirt = await new Tshirt({  
      ...req.body,
      hashedPassword:password
    }).save();
    tshirt = {...tshirt._doc}
    delete tshirt.__v
    delete tshirt.hashedPassword
    res.status(200).json(tshirt)
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀" ,error:error});
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.removeTshirt = async (req, res) => {
  try {
     var tshirt = await Tshirt.deleteOne({tshirtId:req.body.tshirtId})
     if(tshirt.acknowledged){
       res.status(200).json({messsage:"Successfully Removed ✅"})
     }else{
      res.status(200).json({messsage:"Failed to Delete 💔"})
     }
     
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀" ,error:error});
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

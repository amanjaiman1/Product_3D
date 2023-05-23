const { User } = require("../model");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.err({ messsage: "Something went wrong 💀" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userName } = req.body;
    const users = await User.find({ userName: userName });
    res.status(200).json(users);
  } catch (error) {
    console.err({ messsage: "Something went wrong 💀" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, mobile, password } = req.body;
    let user = await new User({
      firstName:firstName,
      lastName:lastName,
      mobile:mobile,
      hashedPassword:password
    }).save();
    user = {...user._doc}
    delete user.__v
    delete user.hashedPassword
    res.status(200).json(user)
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀" ,error:error});
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.removeUser = async (req, res) => {
  try {
  } catch (error) {
    console.err({ messsage: "Something went wrong 💀" });
  }
};

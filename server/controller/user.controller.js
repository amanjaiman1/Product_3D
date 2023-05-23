const { User } = require("../model");
const { hashPassword } = require("../utils/hashPassword");

exports.getUsers = async (req, res) => {
  try {
    var users = await User.find({}).select("-hashedPassword").select("-__v");
    res.status(200).json(users);
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.body;
    var user = await User.findById(userId)
      .select("-hashedPassword")
      .select("-__v");
    res.status(200).json(user);
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { password, email, mobile } = req.body;
    delete req.body.password;
    var user = await User.findOne({ $or: [{ email }, { mobile }] });
    if (user?.email == req.body.email || user?.mobile == req.body.mobile) {
      res.status(202).json({ message: "User Already Exist" });
      return;
    }
    user = await new User({
      ...req.body,
      hashedPassword: await hashPassword(password),
    }).save();
    user = { ...user._doc };
    delete user.__v;
    delete user.hashedPassword;
    res.status(200).json(user);
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { email, mobile, firstName, lastName, currentAddress } = req.body;
    const userExists = await User.findOne({
      $or: [{ email }, { mobile }],
    });
    if (userExists?.mobile == mobile || userExists?.email == email) {
      res.status(202).json({ message: "User Already Exist" });
      return;
    }
    var user = await User.findByIdAndUpdate(
      req.body.userId,
      { $set: { firstName, lastName, mobile, currentAddress } },
      {
        new: true,
        runValidators: true,
        useFindAndModify: true,
      }
    );
    if (user) {
      res.status(200).json({ messsage: "Successfully Updated ✅" });
    } else {
      res.status(200).json({ messsage: "Failed to Update 💔" });
    }
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    var user = await User.findByIdAndUpdate(
      userId,
      { $push: { address: address } },
      {
        new: true,
        runValidators: true,
        useFindAndModify: true,
      }
    );
    console.log(user);
    if (user) {
      res.status(200).json({ messsage: "Successfully Updated ✅" });
    } else {
      res.status(200).json({ messsage: "Failed to Update 💔" });
    }
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const { userId, addressId, address } = req.body;
    var user = undefined
    if (user.modifiedCount>0) {
      res.status(200).json({ messsage: "Successfully Updated ✅" });
    } else {
      res.status(200).json({ messsage: "Failed to Update 💔" });
    }
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

exports.removeUser = async (req, res) => {
  try {
    var user = await User.findByIdAndRemove(req.body.userId);
    if (user) {
      res.status(200).json({ messsage: "Successfully Removed ✅" });
    } else {
      res.status(200).json({ messsage: "Failed to Delete 💔" });
    }
  } catch (error) {
    console.error({ messsage: "Something went wrong 💀", error: error });
    res.status(500).json({ messsage: "Something went wrong 💀" });
  }
};

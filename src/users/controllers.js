const User = require("./model");
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {

    const token = await jwt.sign({id: req.user.id}, process.env.SE);

    const user = {
        id:mreq.user.id,
        username:req.user.username,
        token:token,
    }
    res.status(201).json({ message: "success", user: req.User });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({});

    res.status(200).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};

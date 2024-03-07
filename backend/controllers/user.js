const User = require("../models/user");
const jwt = require("jsonwebtoken");
const user = require('../models/user');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

// signup user

const signupUser = async (req, res) => {
  const { email, password, lastname, firstname } = req.body;
  try {
    const user = await User.signup(email, password, lastname, firstname);

    // Create a token
    const token = createToken(user._id);

    // Return the user ID along with other data
    res.status(200).json({ userId: user._id, email, token, lastname, firstname });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { signupUser, loginUser };

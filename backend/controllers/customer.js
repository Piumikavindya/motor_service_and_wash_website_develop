const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.login(email, password);
    // create a token
    const token = createToken(customer._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

// signup user

const signupUser = async (req, res) => {
  const { email, password, lastname, firstname } = req.body;
  try {
    const customer = await Customer.signup(
      email,
      password,
      lastname,
      firstname
    );

    // create a token
    const token = createToken(customer._id);

    res.status(200).json({ email, token,lastname,firstname });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

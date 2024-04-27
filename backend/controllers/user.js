const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password ,accountId} = req.body;
  try {
    const user = await User.login(email, password,accountId);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token ,accountId});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

// Refactored generateAccountId function to be used internally
const generateAccountId = async () => {
  try {
    const latestAccount = await User.findOne({}, {}, { sort: { accountId: -1 } });

    // If latestAccount exists, increment the account ID
    if (latestAccount && latestAccount.accountId) {
      const lastIdNumber = parseInt(latestAccount.accountId.slice(3), 10);
      const newIdNumber = lastIdNumber + 1;
      const newAccountId = `ACC${newIdNumber.toString().padStart(3, '0')}`;
      return newAccountId;
    } else {
      // If no existing accounts found, start with the first ID
      return 'ACC001';
    }
  } catch (error) {
    console.error("Error generating accountId:", error);
    throw new Error("Error generating account ID");
  }
};


// signup user
const signupUser = async (req, res) => {
  const { email, password, lastname, firstname } = req.body;
  try {
    // Generate account ID
    const accountId = await generateAccountId();

    // Sign up user with the generated account ID
    const user = await User.signup(email, password, lastname, firstname, accountId);

    // Create a token
    const token = createToken(user._id);

    // Return the user ID along with other data
    res.status(200).json({ userId: user._id, email, token, lastname, firstname, accountId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
      


module.exports = { signupUser, loginUser };

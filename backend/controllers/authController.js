const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require(`../models/userModel`)


const signUp = async (req, res) => {
  console.log('inside sign up');
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: `Email: ${email} is already in use` });
    } else if (!email || email == "") {
      return res.status(400).json({ success: false, message: `Email id cannot be empty` });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
    }

    return res.status(201).json({ success: true, message: `User: ${name} registered successfully` });
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: `Error registering user` };
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: `User not found` })
    }
    const checkUser = bcrypt.compare(password, user.password)
    if (!checkUser) {
      return res.status(400).json({ success: false, message: `Invalid creds` })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, message: `${user.name} Logged in successfully`, user: { id: user._id, name: user.name, email: user.email }, token });

  }
  catch (error) {
    console.error("SignIn error:", error);
    return { success: false, message: `Error` };
  }

}
module.exports = { signUp, signIn }

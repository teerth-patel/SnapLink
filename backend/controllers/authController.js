const User = require("../models/userModel");

const signUp = async (req, res) => {

  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: `Email: ${email} is already in use` });
    } else if (!email || email == "") {
      return res.status(400).json({ success: false, message: `Email id cannot be empty` });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
    }


    return res.status(201).json({ success: true, message: `User: ${name} registered successfully` });
  } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: `Error registering user` };
  }
}

module.exports = { signUp }
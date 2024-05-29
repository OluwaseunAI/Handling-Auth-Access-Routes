const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const user = require("../models/user.model");

async function httpLogin(req, res) {
  try {
    const { email, password } = req.body

    //find user by email
    const user = await USer.findOne({email: email});
    //const user = await USer.findOne({email}); JSX6

    if (!user){
      return res.status(401).json({ message: "Invalid username or password"})
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(401).json({ message: "Invalid username or password"})
    }
    const payload = {userId: user._id}
    // const payload = { user } //beginner


    //Generate JWT
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET);
    res(accessToken)
  } catch (err){

  }
}

module.exports = {
  httpLogin
};
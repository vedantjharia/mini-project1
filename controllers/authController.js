const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, fullname } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .send("You already have an account with this email,  please login");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.status(500).send("Error hashing password");
        else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });
          let token = generateToken(user);
          res.cookie("token", token);

           res.redirect("/shop");
        }
      });
    });
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email } );

  if (!user) {
    req.flash("error", "Email or Password incorrect");
    return res.redirect("/");
  }

  else {
    bcrypt.compare(password, user.password, function (err, result) {
      if(result) {
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop");
      }
      else {
        req.flash("error", "Email or Password incorrect");
        return res  
          .send("Email or password is incorrect");
      }
    });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
};
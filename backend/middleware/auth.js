const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");

const auth = async (req, res, next) => {
  const token = req.signedCookies.jwt;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await usersModel.User.findById(decoded.id).select("-password");
    req.user = user;
    console.log(user);
    return next();
  } catch (err) {
    throw new Error("Unauthorized");
  }
};

module.exports = auth;

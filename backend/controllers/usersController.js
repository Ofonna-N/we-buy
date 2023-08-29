const usersModel = require("../models/usersModel");
const _ = require("lodash");
const jwtCookieTokenGenerator = require("../services/jwtCookieTokenGenerator");

// register, login, getAll, logout, authenticate, getProfile, updateProfile, delete, getById

// @desc register user
// @route POST /api/users/register
// @access public
const registerUser = async (req, res) => {
  const credentials = req.body;

  const registerationDetails = await usersModel.validateRegistrationSchema(
    credentials
  );

  const userExist = await usersModel.User.findOne({
    email: registerationDetails.email,
  });

  if (!userExist) {
    const newUser = await usersModel.User.create(registerationDetails);
    jwtCookieTokenGenerator.generateJwtCoookieToken(res, newUser);
    return res.json(_.omit(newUser.toObject(), ["password"]));
  } else {
    throw new Error("Account already exists");
  }

  return res.send("Registering user....");
};

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = async (req, res) => {
  const login = req.body;

  const loginDetails = await usersModel.validateLoginSchema(login);

  const user = await usersModel.User.findOne({ email: login.email });

  const userValid = user && (await user.matchPassword(loginDetails.password));

  if (userValid) {
    console.log("User: ", user);
    jwtCookieTokenGenerator.generateJwtCoookieToken(res, user);

    return res.json({
      user: _.omit(user.toObject(), ["password"]),
    });
  } else {
    throw new Error("Invalid email or password");
  }

  // return res.send("loggin in user....");
};

// @desc loguot user
// @route POST /api/users/logout
// @access private
const logoutUser = async (req, res) => {
  res.clearCookie("jwt", jwtCookieTokenGenerator.jwtCookieOptions);
  return res.send("logged out user....");
};

// @desc update user profile
// @route GET /api/users/profile
// @access private
const getByTokenUser = async (req, res) => {
  return res.send("getting single user by token....");
};

// @desc update user profile
// @route PATCH /api/users/profile
// @access private
const updateByTokenUser = async (req, res) => {
  return res.send("updating user profile....");
};

// @desc delete user
// @route DELETE /api/users/:id
// @access private
const deleteByTokenUser = async (req, res) => {
  return res.send("deleting user by Token....");
};

// @desc update user profile
// @route GET /api/users/:id
// @access private/Admin
const getByIdUser = async (req, res) => {
  return res.send("getting single user by id....");
};

// @desc get all users user
// @route GET /api/users
// @access private/Admin
const getAllUser = async (req, res) => {
  return res.send("getting all users....");
};

// @desc delete user
// @route PATCH /api/users/:id
// @access private/Admin
const updateByIdUser = async (req, res) => {
  return res.send("updating user by Id....");
};

// @desc delete user
// @route DELETE /api/users/:id
// @access private/Admin
const deleteByIdUser = async (req, res) => {
  return res.send("deleting user by Id....");
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getByTokenUser,
  updateByTokenUser,
  deleteByTokenUser,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
  getAllUser,
};

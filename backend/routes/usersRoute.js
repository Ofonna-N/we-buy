const express = require("express");

const usersController = require("../controllers/usersController");

const router = express.Router();

// register, getAll, logout, authenticate, getProfile, updateProfile, delete, getById

router.get("/register", usersController.registerUser);

router.post("/login", usersController.loginUser);

router.post("/logout", usersController.logoutUser);

router
  .route("/profile")
  .get(usersController.getByTokenUser)
  .patch(usersController.updateByTokenUser)
  .delete(usersController.deleteByTokenUser);

router
  .route("/:id")
  .get(usersController.getByIdUser)
  .patch(usersController.updateByIdUser)
  .delete(usersController.deleteByIdUser);

router.get("/", usersController.getAllUser);

module.exports = router;

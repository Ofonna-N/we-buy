const express = require("express");
const usersController = require("../controllers/usersController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const router = express.Router();

// register, getAll, logout, authenticate, getProfile, updateProfile, delete, getById

router.get("/register", usersController.registerUser);

router.post("/login", usersController.loginUser);

router.post("/logout", auth, usersController.logoutUser);

router
  .route("/profile")
  .get(auth, usersController.getByTokenUser)
  .patch(auth, usersController.updateByTokenUser)
  .delete(auth, usersController.deleteByTokenUser);

router
  .route("/:id")
  .get(auth, admin, usersController.getByIdUser)
  .patch(auth, admin, usersController.updateByIdUser)
  .delete(auth, admin, usersController.deleteByIdUser);

router.get("/", auth, admin, usersController.getAllUser);

module.exports = router;

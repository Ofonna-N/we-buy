const express = require("express");
const usersController = require("../controllers/usersController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const demoUser = require("../middleware/demoUser");
const router = express.Router();

// register, getAll, logout, authenticate, getProfile, updateProfile, delete, getById

router.post("/register", usersController.registerUser);

router.post("/login", usersController.loginUser);

router.post("/logout", auth, usersController.logoutUser);

router
  .route("/profile")
  .get(auth, usersController.getByTokenUser)
  .patch(auth, demoUser, usersController.updateByTokenUser)
  .delete(auth, demoUser, usersController.deleteByTokenUser);

router
  .route("/:id")
  .get(auth, admin, usersController.getByIdUser)
  .put(auth, demoUser, admin, usersController.updateByIdUser)
  .delete(auth, demoUser, admin, usersController.deleteByIdUser);

router.get("/", auth, admin, usersController.getAllUser);

module.exports = router;

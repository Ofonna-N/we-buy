const express = require("express");
const ordersController = require("../controllers/ordersController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const demoUser = require("../middleware/demoUser");
const router = express.Router();

// register, getAll, logout, authenticate, getProfile, updateProfile, delete, getById

router.post("/", auth, ordersController.createAndAddOrdersByToken_Orders);

router.get("/profile", auth, ordersController.getUserOrders_Orders);

router.get("/profile/:id", auth, ordersController.getUserSingleOrder_Orders);

router.get("/:id", auth, admin, ordersController.getSingleOrderById_Orders);

router.patch(
  "/:id/pay",
  auth,
  // admin,
  ordersController.updateOrderToPaidById_Orders
);

router.patch(
  "/deliver",
  auth,
  demoUser,
  admin,
  ordersController.updateOrderToDeliveredById_Orders
);

router.get("/", auth, admin, ordersController.getOrders_Orders);

module.exports = router;

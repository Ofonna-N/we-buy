const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const demoUser = require("../middleware/demoUser");

// CREATE PRODUCT
router.post("/", auth, demoUser, admin, productsController.createProduct);

// EDIT PRODUCT
router.put("/:id", auth, demoUser, admin, productsController.editProduct);

// GET PRODUCTS
router.get("/", productsController.getAllProduct);

// GET PRODUCT BY ID
router.get("/:id", productsController.getByIdProduct);

// CREATE PRODUCT REVIEW
router.post("/:id/reviews", auth, productsController.createProductReview);

// DELETE PRODUCT
router.delete("/:id", auth, demoUser, admin, productsController.deleteProduct);

module.exports = router;

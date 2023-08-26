const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// GET PRODUCTS
router.get("/", productsController.getAllProduct);

// GET PRODUCT BY ID
router.get("/:id", productsController.getByIdProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productsController");

// GET PRODUCTS
router.get("/products", getProducts);

// GET PRODUCT BY ID
router.get("/products/:id", getProductById);

module.exports = router;

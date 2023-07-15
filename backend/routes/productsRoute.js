const express = require("express");
const router = express.Router();
const { Product } = require("../models/productsModel");

// GET PRODUCTS
router.get("/products", async (req, res) => {
  const products = await Product.find({});

  if (!products) return res.status(404).json({ message: "Products not found" });

  return res.json({ data: products });
});

// GET PRODUCT BY ID
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  return res.json({ data: product });
});

module.exports = router;

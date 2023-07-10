const express = require("express");
const router = express.Router();
const products = require("../data/products");

router.get("/products", (req, res) => {
  return res.json({ data: products });
});

router.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  //   console.log(product);
  return product
    ? res.json({ data: product })
    : res.status(404).send("Product Not found");
});

module.exports = router;

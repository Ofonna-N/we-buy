const { Product } = require("../models/productsModel");
// @desc fetch all products
// @route GET /api/products

const getProducts = async (req, res) => {
  const products = await Product.find({});

  if (!products) return res.status(404).json({ message: "Products not found" });

  return res.json({ data: products });
};

// @desc fetch single product
// @route GET /products/:id
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  return res.json({ data: product });
};

module.exports = { getProducts, getProductById };

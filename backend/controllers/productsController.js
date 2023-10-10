const { Product } = require("../models/productsModel");

// @desc create a product
// @route POST /api/products
// @access Private/Admin
const createProduct = async (req, res) => {
  const product = {
    name: "Sample name",
    description: "Sample description",
    price: 0,
    countInStock: 0,
    brand: "Sample brand",
    category: "Sample category",
    user: req.user._id,
    image: "/sample.jpg",
    numReviews: 0,
    rating: 0,
  };

  const createdProduct = await Product.create(product);

  // const createdProduct = await product.save();

  return res.status(201).json(createdProduct);
};

// @desc edit a product
// @route PUT /api/products/:id
// @access Private/Admin
const editProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.price = req.body.price || product.price;
  product.countInStock = req.body.countInStock || product.countInStock;
  product.image = req.body.image || product.image;
  product.brand = req.body.brand || product.brand;
  product.category = req.body.category || product.category;

  const updatedProduct = await product.save();

  return res.json(updatedProduct);
};

// @desc fetch all products
// @route GET /api/products
const getAllProduct = async (req, res) => {
  const products = await Product.find({});

  if (!products) return res.status(404).json({ message: "Products not found" });

  return res.json(products);
};

// @desc fetch single product
// @route GET /products/:id
const getByIdProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  return res.json(product);
};

module.exports = { getAllProduct, getByIdProduct, createProduct, editProduct };

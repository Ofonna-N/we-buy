const { Product } = require("../models/productsModel");
const { Order } = require("../models/orderModel");
const mongoose = require("mongoose");
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

// @desc create new review
// @route POST /api/products/:id/reviews
// @access Private
const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (!product) throw new Error("Product not found");

  const alreadyReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );

  if (alreadyReviewed) throw new Error("Product already reviewed");

  // Check if the user has ordered this product before
  const userOrders = await Order.find({ user: req.user._id });
  const orderedProduct = userOrders.some((order) =>
    order.orderItems.some(
      (item) => item.product.toString() === product._id.toString()
    )
  );

  if (!orderedProduct)
    throw new Error("You must order this product before you can review it");

  const review = {
    name: req.user.name,
    rating: Number(rating),
    comment,
    user: req.user._id,
  };

  product.reviews.push(review);

  product.numReviews = product.reviews.length;

  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  const reviewedProduct = await product.save();

  return res.status(201).json(reviewedProduct);
};

// @desc delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const product = await Product.findOne(id);

  if (!product) throw new Error("Product not found");

  const deletedProduct = await Product.deleteOne(id);

  return res.json(deletedProduct);
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  editProduct,
  createProductReview,
  deleteProduct,
};

const mongoose = require("mongoose");
const { type, required } = require("../services/defaults");

const productsSchema = new mongoose.Schema(
  {
    name: {
      type,
      required,
    },
    image: {
      type,
      required,
    },
    description: {
      type,
      required,
    },
    brand: {
      type,
      required,
    },
    category: {
      type,
      required,
    },
    price: {
      type: Number,
      required,
    },
    countInStock: {
      type: Number,
      required,
    },
    rating: {
      type: Number,
      required,
    },
    numReviews: {
      type: Number,
      required,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productsSchema);

module.exports.Product = ProductModel;

const mongoose = require("mongoose");
const { type, required } = require("../services/defaults");

const orderItemsSchema = new mongoose.Schema({
  name: {
    type,
    required,
  },
  quantity: {
    type: Number,
    required,
  },
  image: {
    type,
    required,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const shippingInfoSchema = new mongoose.Schema({
  address: {
    type,
    required,
  },
  city: {
    type,
    required,
  },
  postalCode: {
    type,
    required,
  },
  country: {
    type,
    required,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [orderItemsSchema],
    shippingInfo: shippingInfoSchema,
    paymentMethod: {
      type,
      required,
    },
    paymentResult: {
      id: { type },
      status: { type },
      update_time: { type },
      email_address: { type },
    },
    itemPrice: {
      type: Number,
      required,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

module.exports.Order = OrderModel;

const orderModel = require("../models/orderModel");
const mongoose = require("mongoose");
// @desc create and add order to list of orders
// @route POST /api/orders
// @access private
const createAndAddOrdersByToken_Orders = async (req, res) => {
  const {
    orderItems,
    itemPrice,
    shippingInfo,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await orderModel.Order.create({
    user: req.user,
    orderItems,
    itemPrice,
    taxPrice,
    totalPrice,
    shippingPrice,
    paymentMethod,
    shippingInfo,
  });

  return res.json(order);
};

// @desc get logged in user orders
// @route GET /api/orders/profile
// @access private
const getUserOrders_Orders = async (req, res) => {
  const orders = await orderModel.Order.find({ user: req.user._id }).populate(
    "user"
  );

  return res.json(orders);
};
// @desc get logged in user order by Id
// @route GET /api/orders/profile/:id
// @access private
const getUserSingleOrder_Orders = async (req, res) => {
  const order = await orderModel.Order.findById(req.params.id).populate("user");

  if (!order) {
    throw new Error("Order not found");
  }

  if (req.user._id.toString() !== order.user._id.toString())
    throw new Error("unAuthorized access to a user's order");

  return res.json(order);
};

// @desc get single order by id
// @route GET /api/orders/:id
// @access private/Admin
const getSingleOrderById_Orders = async (req, res) => {
  const order = await orderModel.Order.findById(req.params.id).populate("user");

  if (!order) {
    throw new Error("Order not found");
  }

  return res.json(order);
};

// @desc update order to paid
// @route PATCH /api/orders/:id/pay
// @access private/Admin
const updateOrderToPaidById_Orders = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const order = await orderModel.Order.findOne(id);
  // console.log("body: ", req.body);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.details.id,
      status: req.body.details.status,
      update_time: req.body.details.update_time,
      email_address: req.body.details.payer.email_address,
    };
  } else {
    throw new Error("Order does not exist");
  }

  const updatedOrder = await order.save();

  return res.json(updatedOrder);
};

// @desc updpate order to delivered
// @route PATCH /api/orders/:id/deliver
// @access private/Admin
const updateOrderToDeliveredById_Orders = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.body.id);
  const order = await orderModel.Order.findOne(id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    return res.json(updatedOrder);
  } else {
    throw new Error("Order does not exist");
  }
};

// @desc get all orders
// @route GET /api/orders/
// @access private/Admin
const getOrders_Orders = async (req, res) => {
  const orders = await orderModel.Order.find({}).populate("user");

  return res.json(orders);
};

module.exports = {
  createAndAddOrdersByToken_Orders,
  getUserOrders_Orders,
  getUserSingleOrder_Orders,
  getSingleOrderById_Orders,
  updateOrderToPaidById_Orders,
  updateOrderToDeliveredById_Orders,
  getOrders_Orders,
};

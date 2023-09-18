const orderModel = require("../models/orderModel");

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
  return res.send("getting users orders by token...");
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
  return res.send("updating order to paid...");
};

// @desc updpate order to delivered
// @route PATCH /api/orders/:id/deliver
// @access private/Admin
const updateOrderToDeliveredById_Orders = async (req, res) => {
  return res.send("admin just updated order to delivered...");
};

// @desc get all orders
// @route GET /api/orders/
// @access private/Admin
const getOrders_Orders = async (req, res) => {
  return res.send("getting all orders...");
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

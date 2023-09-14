// @desc create and add order to list of orders
// @route POST /api/orders
// @access private
const createAndAddOrdersByToken_Orders = async (req, res) => {
  return res.send("created and added orders...");
};

// @desc get logged in user orders
// @route GET /api/orders/profile
// @access private
const getOrdersByToken_Orders = async (req, res) => {
  return res.send("getting users orders by token...");
};

// @desc get single order by id
// @route GET /api/orders/:id
// @access private/Admin
const getSingleOrderById_Orders = async (req, res) => {
  return res.send("getting order by id...");
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
  getOrdersByToken_Orders,
  getSingleOrderById_Orders,
  updateOrderToPaidById_Orders,
  updateOrderToDeliveredById_Orders,
  getOrders_Orders,
};

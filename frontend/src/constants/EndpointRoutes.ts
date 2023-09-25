const endpointRoutes = {
  AUTH: {
    LOGIN_USER: "users/login/",
    LOGOUT_USER: "users/logout/",
    REGISTER_USER: "users/register/",
  },
  ORDERS: {
    ORDERS: "/orders/",
    USER_ORDER_ROUTE: "/orders/profile/",
  },
  PRODUCTS: {
    PRODUCTS: "/products/",
  },
  PAYPAL: {
    CLIENT_ID: "/paypal/clientid/",
  },
};

export default endpointRoutes;

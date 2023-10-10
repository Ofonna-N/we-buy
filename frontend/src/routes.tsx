import { createBrowserRouter } from "react-router-dom";
import RoutePaths from "./constants/RoutePaths";
import Layout from "./pages/layout/Layout";
import ProductsListingPage from "./pages/productsListing/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CartPage from "./pages/cartPage/CartPage";
import SignInPage from "./pages/signIn/SignInPage";
import RegisterationPage from "./pages/registeration/RegisterationPage";
import ShippingPage from "./pages/shippingPage/ShippingPage";
import PrivateRoute from "./pages/PrivateRoute";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import RoutesPaths from "./constants/RoutePaths";
import PlaceOrderPage from "./pages/placeOrderPage/PlaceOrderPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import OrderDetailsPage from "./pages/orderDetailsPage/OrderDetailsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import AdminRoute from "./pages/AdminRoute";
import OrdersAdminPage from "./pages/admin/orders/OrdersAdminPage";
import OrderDetailAdminPage from "./pages/admin/orders/OrderDetailAdminPage";
import ProductsAdminPage from "./pages/admin/products/ProductsAdminPage";

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME_ROUTE,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsListingPage />,
      },
      {
        path: `${RoutePaths.PRODUCTS_ROUTE}/:id`,
        element: <ProductDetailPage />,
      },
      {
        path: RoutePaths.CART_ROUTE,
        element: <CartPage />,
      },
      {
        path: RoutePaths.SIGN_IN_ROUTE,
        element: <SignInPage />,
      },
      {
        path: RoutePaths.REGISTER_ROUTE,
        element: <RegisterationPage />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: RoutePaths.CHECKOUT_ROUTE,

            element: <CheckoutPage />,
            children: [
              {
                path: RoutePaths.SHIPPING_ROUTE,
                element: <ShippingPage />,
              },
              {
                path: RoutesPaths.PAYMENTMETHOD_ROUTE,
                element: <PaymentPage />,
              },
              {
                path: RoutesPaths.PLACE_ORDER_ROUTE,
                element: <PlaceOrderPage />,
              },
            ],
          },
          {
            path: `${RoutePaths.ORDERS_ROUTE}/:id`,
            element: <OrderDetailsPage />,
          },
          {
            path: RoutePaths.PROFILE_ROUTE,
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "",
        element: <AdminRoute />,
        children: [
          {
            path: RoutePaths.ADMIN_ROUTE + RoutePaths.ORDERS_ROUTE,
            element: <OrdersAdminPage />,
          },
          {
            path: `${RoutePaths.ADMIN_ROUTE + RoutePaths.ORDERS_ROUTE}/:id`,
            element: <OrderDetailAdminPage />,
          },
          {
            path: RoutePaths.ADMIN_ROUTE + RoutePaths.PRODUCTS_ROUTE,
            element: <ProductsAdminPage />,
          },
        ],
      },

      {
        path: RoutePaths.PLAYGROUND_ROUTE,
        element: <PlaygroundPage />,
      },
    ],
  },
]);

export default router;

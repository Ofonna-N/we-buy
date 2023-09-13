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
import PaymentPage from "./pages/paymentPage/paymentPage";
import PlaceOrderPage from "./pages/placeOrderPage/PlaceOrderPage";

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
                index: true,
                element: <ShippingPage />,
              },
              {
                path:
                  RoutePaths.CHECKOUT_ROUTE +
                  "/" +
                  RoutesPaths.PAYMENTMETHOD_ROUTE,
                element: <PaymentPage />,
              },
              {
                path:
                  RoutePaths.CHECKOUT_ROUTE +
                  "/" +
                  RoutesPaths.PLACE_ORDER_ROUTE,
                element: <PlaceOrderPage />,
              },
            ],
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

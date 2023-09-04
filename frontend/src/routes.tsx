import { createBrowserRouter } from "react-router-dom";
import RoutePaths from "./constants/RoutePaths";
import Layout from "./pages/layout/Layout";
import ProductsListingPage from "./pages/productsListing/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CartPage from "./pages/cartPage/CartPage";
import SignInPage from "./pages/signIn/SignInPage";
import RegisterationPage from "./pages/registeration/registerationPage";

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
        path: RoutePaths.PLAYGROUND_ROUTE,
        element: <PlaygroundPage />,
      },
    ],
  },
]);

export default router;

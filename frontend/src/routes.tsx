import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsListingPage from "./pages/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CartPage from "./pages/cartPage/CartPage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsListingPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/playground",
        element: <PlaygroundPage />,
      },
    ],
  },
]);

export default router;

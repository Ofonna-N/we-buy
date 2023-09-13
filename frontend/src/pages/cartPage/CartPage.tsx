//#region Imports
import { Alert, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { cartActions } from "../../slices/cartSlice";
import CartSummarySection from "./components/CartSummarySection";
import { CartItem } from "../../types/Cart";
import CartItemsSection from "./components/CartItemsSection";
import RoutesPaths from "../../constants/RoutePaths";
//#endregion

const CartPage = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const addToCart = (cartItem: CartItem, qty: string) => {
    dispach(
      cartActions.addToCart({
        cartItem: {
          ...cartItem,
          qty: Number(qty),
        },
      })
    );
  };

  const removeFromCart = (id: string) => {
    dispach(
      cartActions.removeFromCart({
        id,
      })
    );
  };

  const proceedToCheckout = () => {
    navigate(RoutesPaths.CHECKOUT_ROUTE);
  };

  if (cart.cartItems.length <= 0) {
    return (
      <Container fixed sx={{ paddingTop: "1rem" }}>
        <Alert variant="outlined" severity="info">
          Your Cart is Empty{" "}
          <Link component={RouterLink} to="/">
            Go back
          </Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Container fixed sx={{ paddingTop: "1rem" }}>
      <Typography variant="h4" component={"h2"} mb={"1rem"}>
        Cart
      </Typography>
      <Grid2 container gap={"1rem"}>
        <Grid2 lg={7}>
          <CartItemsSection
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Grid2>
        <Grid2 lg={4}>
          <CartSummarySection
            cart={cart}
            proceedToCheckout={proceedToCheckout}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default CartPage;

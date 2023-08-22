//#region Imports
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { cartActions } from "../../slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import CartSummarySection from "./components/CartSummarySection";
import { CartItem } from "../../types/Cart";
import CartItemsSection from "./components/CartItemsSection";
//#endregion

const CartPage = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const dispach = useAppDispatch();

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

  if (cart.cartItems.length <= 0)
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
          <CartSummarySection cart={cart} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default CartPage;

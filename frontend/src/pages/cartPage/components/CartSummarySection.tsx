import { Paper, List, ListItem, Typography, Button, Box } from "@mui/material";
import Cart from "../../../types/Cart";

type Props = {
  cart: Cart;
};

const CartSummarySection = (props: Props) => {
  const cartSummaryDetails = [
    {
      label: "Price",
      price: props.cart.itemsPrice,
    },
    {
      label: "Shgipping",
      price: props.cart.shippingPrice,
    },
    {
      label: "Tax",
      price: props.cart.taxPrice,
    },
    {
      label: "Total",
      price: props.cart.totalPrice,
    },
  ];

  return (
    <Paper elevation={3} component={List}>
      <ListItem>
        <Typography component={"h3"} variant="h4">
          Subtotal ({props.cart.qty}) Items
        </Typography>
      </ListItem>
      {cartSummaryDetails.map((summary, i) => (
        <ListItem key={i} divider={i === cartSummaryDetails.length - 1}>
          <Typography fontSize={"1.2rem"}>
            {summary.label}:{" "}
            <Box component={"span"} fontSize={"1rem"}>
              ${summary.price.toFixed(2)}
            </Box>
          </Typography>
        </ListItem>
      ))}
      <ListItem>
        <Button variant="contained" sx={{ marginY: "1rem" }}>
          Proceed To Checkout
        </Button>
      </ListItem>
    </Paper>
  );
};

export default CartSummarySection;

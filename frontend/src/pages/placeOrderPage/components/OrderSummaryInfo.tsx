import { List, ListItem, Paper, Typography } from "@mui/material";
import Cart from "../../../types/Cart";

type Props = {
  cart: Cart;
};

const OrderSummaryInfo = (props: Props) => {
  const infoList: React.ReactNode[] = [
    <>
      <Typography flexGrow={1}>Items:</Typography>
      <Typography>${props.cart.itemsPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Shipping:</Typography>
      <Typography>${props.cart.shippingPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Tax:</Typography>
      <Typography>${props.cart.taxPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Total:</Typography>
      <Typography>${props.cart.totalPrice}</Typography>
    </>,
  ];

  return (
    <Paper component={List}>
      <ListItem divider sx={{ paddingY: 2 }}>
        <Typography variant="h4">Order Summary</Typography>
      </ListItem>
      {infoList.map((info, i) => (
        <ListItem key={i} divider={i !== infoList.length - 1}>
          {info}
        </ListItem>
      ))}
    </Paper>
  );
};

export default OrderSummaryInfo;

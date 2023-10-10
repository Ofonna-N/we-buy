import {
  Paper,
  List,
  ListItem,
  Typography,
  Stack,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";
import ShippingFormInput from "../../../types/ShippingFormInput";
import PaymentMethodType from "../../../types/PaymentMethods";
import { CartItem } from "../../../types/Cart";
import AppNavLink from "../../../component/interactive/clickables/AppNavLink";
import RoutesPaths from "../../../constants/RoutePaths";

type Props = {
  shippingInfo: ShippingFormInput | null;
  paymentMethod: PaymentMethodType | null;
  cartItems: CartItem[];
};

const OrderSummaryList = (props: Props) => {
  const theme = useTheme();

  const shippingSummary = (
    <>
      {" "}
      <Typography variant="h4" mb={1}>
        Shipping
      </Typography>
      <Typography>
        <b>Address: </b>
        {props.shippingInfo?.address}, {props.shippingInfo?.city},{" "}
        {props.shippingInfo?.country}, {props.shippingInfo?.postalCode}.
      </Typography>
    </>
  );

  const paymentMethodSummary = (
    <>
      {" "}
      <Typography variant="h4" mb={1}>
        Payment Method
      </Typography>
      <Typography>
        <b>Method: </b>
        {props.paymentMethod}
      </Typography>
    </>
  );

  const orderItemsSummary = (
    <>
      {" "}
      <Typography variant="h4" mb={1}>
        Order Items
      </Typography>
      <Stack width={"100%"} gap={1}>
        {props.cartItems.map((cartItem, i) => (
          <Stack key={i} direction={"row"} alignItems={"center"} gap={1}>
            <Avatar
              src={cartItem.product.image}
              variant="square"
              alt={cartItem.product.name + " avatar"}
              sx={{
                height: "50px",
                width: "50px",
              }}
            />
            <Box flexGrow={1}>
              <AppNavLink
                to={RoutesPaths.PRODUCTS_ROUTE + "/" + cartItem.product._id}
                sx={{ color: theme.palette.text.primary }}
              >
                {cartItem.product.name.split(" ").slice(0, -1).join(" ")}
                <Box component={"span"} display={"block"}>
                  {
                    cartItem.product.name.split(" ")[
                      cartItem.product.name.split(" ").length - 1
                    ]
                  }
                </Box>
              </AppNavLink>
            </Box>
            <Box>
              <Typography>
                {cartItem.qty} x ${cartItem.product.price} ={" "}
                {Number(cartItem.qty) * Number(cartItem.product.price)}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </>
  );

  const summaryList: React.ReactNode[] = [
    shippingSummary,
    paymentMethodSummary,
    orderItemsSummary,
  ];

  return (
    <Paper component={List} sx={{ flexGrow: "1" }}>
      {summaryList.map((summary, i) => (
        <ListItem
          key={i}
          divider={i !== summaryList.length - 1}
          sx={{ flexDirection: "column", mb: 2 }}
          alignItems="flex-start"
        >
          {" "}
          {summary}
        </ListItem>
      ))}
    </Paper>
  );
};

export default OrderSummaryList;

import {
  Paper,
  List,
  ListItem,
  Typography,
  Alert,
  Stack,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";
import AppNavLink from "../../../component/interactive/clickables/AppNavLink";
import RoutesPaths from "../../../constants/RoutePaths";
import { OrderResponse } from "../../../types/Order";

type Props = {
  order: OrderResponse;
};

const OrderDetailsInfo = (props: Props) => {
  const theme = useTheme();

  return (
    <Paper component={List} sx={{ flexGrow: 1 }}>
      <ListItem
        divider
        sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}
      >
        <Typography variant="h4">Shipping</Typography>
        <Typography>
          <b>Name: </b> {props.order?.user.name}
        </Typography>
        <Typography>
          <b>Email: </b> {props.order?.user.email}
        </Typography>
        <Typography>
          <b>Address: </b> {props.order?.shippingInfo.address}
        </Typography>
        <Alert
          severity={props.order?.isDelivered ? "success" : "warning"}
          sx={{ width: "100%" }}
        >
          {props.order?.isDelivered
            ? props.order.deliveredAt
              ? "Delivered on " +
                new Date(props.order.deliveredAt).toLocaleDateString()
              : ""
            : "Not Delivered"}
        </Alert>
      </ListItem>
      <ListItem
        divider
        sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}
      >
        <Typography variant="h4">Payment Method</Typography>
        <Typography>
          <b>Method: </b> {props.order?.paymentMethod}
        </Typography>

        <Alert
          severity={props.order?.isPaid ? "success" : "warning"}
          sx={{ width: "100%" }}
        >
          {props.order?.isPaid
            ? "Paid on " +
              (props.order.paidAt
                ? new Date(props.order.paidAt).toLocaleDateString()
                : "")
            : "Not Paid"}
        </Alert>
      </ListItem>
      <ListItem sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}>
        <Typography variant="h4">Order Items</Typography>
        <Stack width={"100%"} gap={1}>
          {props.order?.orderItems.map((orderItem, i) => (
            <Stack key={i} direction={"row"} alignItems={"center"} gap={1}>
              <Avatar
                src={orderItem.image}
                variant="square"
                alt={orderItem.name + " avatar"}
                sx={{
                  height: "50px",
                  width: "50px",
                }}
              />
              <Box flexGrow={1}>
                <AppNavLink
                  to={RoutesPaths.PRODUCTS_ROUTE + "/" + orderItem.product}
                  sx={{ color: theme.palette.text.primary }}
                >
                  {orderItem.name.split(" ").slice(0, -1).join(" ")}
                  <Box component={"span"} display={"block"}>
                    {
                      orderItem.name.split(" ")[
                        orderItem.name.split(" ").length - 1
                      ]
                    }
                  </Box>
                </AppNavLink>
              </Box>
              <Box>
                <Typography>
                  {orderItem.quantity} x ${orderItem.price} ={" "}
                  {orderItem.quantity * Number(orderItem.price)}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </ListItem>
    </Paper>
  );
};

export default OrderDetailsInfo;

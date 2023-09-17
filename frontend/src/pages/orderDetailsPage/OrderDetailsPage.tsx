import {
  Alert,
  Avatar,
  Box,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import useQuerySingleOrder from "../../hooks/api-hooks/orders/useQuerySingleOrder";
import { useParams } from "react-router-dom";
import AppNavLink from "../../component/interactive/AppNavLink";
import RoutesPaths from "../../constants/RoutePaths";
import AppSpinner from "../../component/loading/AppSpinner";

const OrderDetailsPage = () => {
  const params = useParams();

  const { data, isLoading, error } = useQuerySingleOrder(params.id || "");

  const theme = useTheme();

  if (isLoading) return <AppSpinner />;

  if (error) throw new Error(error.message);

  return (
    <AppContainer>
      <Box py={3}>
        <Typography variant="h3">Order No: {data?._id}</Typography>
      </Box>
      <Stack gap={2} direction={"row"}>
        <Paper component={List} sx={{ flexGrow: 1 }}>
          <ListItem
            divider
            sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}
          >
            <Typography variant="h4">Shipping</Typography>
            <Typography>
              <b>Name: </b> {data?.user.name}
            </Typography>
            <Typography>
              <b>Email: </b> {data?.user.email}
            </Typography>
            <Typography>
              <b>Address: </b> {data?.shippingInfo.address}
            </Typography>
            <Alert
              severity={data?.isDelivered ? "success" : "warning"}
              sx={{ width: "100%" }}
            >
              {data?.isDelivered ? "Delivered" : "Not Delivered"}
            </Alert>
          </ListItem>
          <ListItem
            divider
            sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}
          >
            <Typography variant="h4">Payment Method</Typography>
            <Typography>
              <b>Method: </b> {data?.paymentMethod}
            </Typography>

            <Alert
              severity={data?.isPaid ? "success" : "warning"}
              sx={{ width: "100%" }}
            >
              {data?.isDelivered ? "Paid" : "Not Paid"}
            </Alert>
          </ListItem>
          <ListItem
            sx={{ flexDirection: "column", alignItems: "start", gap: 1 }}
          >
            <Typography variant="h4">Order Items</Typography>
            <Stack width={"100%"} gap={1}>
              {data?.orderItems.map((orderItem, i) => (
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
        <Paper component={List} sx={{ alignSelf: "flex-start" }}>
          <ListItem>
            <Typography variant="h4">Order Summary</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography>Items</Typography>
            <Typography>${data?.itemPrice}</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography>Shippinh</Typography>
            <Typography>${data?.shippingPrice}</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography>Tax</Typography>
            <Typography>${data?.taxPrice}</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography>Total</Typography>
            <Typography>${data?.totalPrice}</Typography>
          </ListItem>
        </Paper>
      </Stack>
    </AppContainer>
  );
};

export default OrderDetailsPage;

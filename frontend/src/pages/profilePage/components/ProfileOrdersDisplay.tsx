import {
  Alert,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AppSpinner from "../../../component/loading/AppSpinner";
import RoutesPaths from "../../../constants/RoutePaths";
import { OrderResponse } from "../../../types/Order";
import { AxiosError } from "axios";
import ErrorResponse from "../../../types/ErrorResponse";
import { useNavigate } from "react-router-dom";

type Props = {
  orders: OrderResponse[] | undefined;
  orderError: AxiosError<ErrorResponse> | null;
  orderIsLoading: boolean;
};

const ProfileOrdersDisplay = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box>
      {props.orderIsLoading ? (
        <AppSpinner />
      ) : props.orders && props.orders.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>PAID</TableCell>
              <TableCell>DELIVERED</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.orders.map((order, i) => (
              <TableRow
                key={i}
                sx={{
                  textDecoration: "none",
                  "&:hover td": {
                    color: "primary.main",
                  },
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(RoutesPaths.ORDERS_ROUTE + "/" + order._id)
                }
              >
                <TableCell>{order._id}</TableCell>
                <TableCell>
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : ""}
                </TableCell>
                <TableCell>${order.totalPrice}</TableCell>
                <TableCell>{order.isPaid ? "Paid" : "Not Paid"}</TableCell>
                <TableCell>
                  {order.isDelivered ? "Delivered" : "Not Delivered"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : props.orderError?.message ? (
        <Alert variant="outlined" severity="error">
          {props.orderError?.message}
        </Alert>
      ) : (
        <Alert variant="outlined" severity="info">
          You haven't placed any orders yet
        </Alert>
      )}
    </Box>
  );
};

export default ProfileOrdersDisplay;

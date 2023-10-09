import {
  Alert,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AppSpinner from "../loading/AppSpinner";
import { OrderResponse } from "../../types/Order";
import { AxiosError } from "axios";
import ErrorResponse from "../../types/ErrorResponse";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  orders: OrderResponse[] | undefined;
  orderError: AxiosError<ErrorResponse> | null;
  orderIsLoading: boolean;
  isAdmin?: boolean;
  onRowClick: (order: OrderResponse) => void;
};

const AppOrdersTable = (props: Props) => {
  return (
    <Box>
      {props.orderIsLoading ? (
        <AppSpinner />
      ) : props.orders && props.orders.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              {props.isAdmin && <TableCell>USER</TableCell>}
              <TableCell>DATE</TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell align="center">PAID</TableCell>
              <TableCell align="center">DELIVERED</TableCell>
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
                onClick={() => props.onRowClick(order)}
              >
                <TableCell>{order._id}</TableCell>
                {props.isAdmin && <TableCell>{order.user.name}</TableCell>}
                <TableCell>
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : ""}
                </TableCell>
                <TableCell>${order.totalPrice}</TableCell>
                <TableCell align="center">
                  {order.paidAt ? (
                    new Date(order.paidAt).toLocaleDateString()
                  ) : (
                    <CloseIcon color="error" />
                  )}
                </TableCell>
                <TableCell align="center">
                  {order.isDelivered ? (
                    order.deliveredAt ? (
                      new Date(order.deliveredAt).toLocaleDateString()
                    ) : (
                      ""
                    )
                  ) : (
                    <CloseIcon color="error" />
                  )}
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

export default AppOrdersTable;

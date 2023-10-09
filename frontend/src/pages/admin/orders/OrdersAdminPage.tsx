import { Typography } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import useQueryAllOrders from "../../../hooks/api-hooks/orders/useQueryAllOrders";
import AppOrdersTable from "../../../component/common/AppOrdersTable";
import { useNavigate } from "react-router-dom";
import RoutesPaths from "../../../constants/RoutePaths";

const OrdersAdminPage = () => {
  const { data: orders, isLoading, error } = useQueryAllOrders();
  const navigate = useNavigate();
  return (
    <AppContainer>
      <Typography variant="h4" mb={"2rem"}>
        {" "}
        Orders
      </Typography>
      <AppOrdersTable
        orders={orders}
        orderError={error}
        orderIsLoading={isLoading}
        isAdmin={true}
        onRowClick={(order) => {
          navigate(
            RoutesPaths.ADMIN_ROUTE + RoutesPaths.ORDERS_ROUTE + "/" + order._id
          );
        }}
      />
    </AppContainer>
  );
};

export default OrdersAdminPage;

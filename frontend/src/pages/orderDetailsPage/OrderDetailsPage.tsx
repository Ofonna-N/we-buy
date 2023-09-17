import { Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import useQuerySingleOrder from "../../hooks/api-hooks/orders/useQuerySingleOrder";
import { useParams } from "react-router-dom";
import AppSpinner from "../../component/loading/AppSpinner";
import OrderDetailsInfo from "./components/OrderDetailsInfo";
import { OrderResponse } from "../../types/Order";
import OrderDetailsSummary from "./components/OrderDetailsSummary";

const OrderDetailsPage = () => {
  const params = useParams();

  const {
    data: order,
    isLoading,
    error,
  } = useQuerySingleOrder(params.id || "");

  if (isLoading) return <AppSpinner />;

  if (error) throw new Error(error.message);

  return (
    <AppContainer>
      <Box py={3}>
        <Typography variant="h3">Order No: {order?._id}</Typography>
      </Box>
      <Stack gap={2} direction={"row"}>
        <OrderDetailsInfo order={order as OrderResponse} />
        <OrderDetailsSummary order={order as OrderResponse} />
      </Stack>
    </AppContainer>
  );
};

export default OrderDetailsPage;

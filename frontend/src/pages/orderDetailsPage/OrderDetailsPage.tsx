import { Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import useQuerySingleOrder from "../../hooks/api-hooks/orders/useQuerySingleOrder";
import { useParams } from "react-router-dom";
import AppSpinner from "../../component/loading/AppSpinner";
import OrderDetailsInfo from "./components/OrderDetailsInfo";
import { OrderResponse } from "../../types/Order";
import OrderDetailsSummary from "./components/OrderDetailsSummary";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import AppPageHeader from "../../component/page/AppPageHeader";

const OrderDetailsPage = () => {
  const params = useParams();

  const {
    data: order,
    isLoading: orderLoading,
    error: orderError,
    refetch: refetchOrder,
  } = useQuerySingleOrder(params.id || "");

  const paypalScript = usePayPalScriptReducer();

  if (orderLoading) return <AppSpinner />;

  if (orderError) throw new Error(orderError.message);

  return (
    <AppContainer>
      <AppPageHeader title="Order Details" titlePostfix={order?._id} />
      <Stack
        gap={2}
        sx={{
          flexDirection: {
            lg: "row",
          },
        }}
      >
        <OrderDetailsInfo order={order as OrderResponse} />
        <OrderDetailsSummary
          order={order as OrderResponse}
          paypalScript={paypalScript}
          isLoading={orderLoading}
          refetchOrder={() => refetchOrder()}
        />
      </Stack>
    </AppContainer>
  );
};

export default OrderDetailsPage;

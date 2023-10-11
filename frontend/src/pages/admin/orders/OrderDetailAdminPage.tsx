import { Stack } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useParams } from "react-router-dom";
import useQuerySingleOrderById from "../../../hooks/api-hooks/orders/useQuerySingleOrderById";
import OrderDetailsInfo from "../../orderDetailsPage/components/OrderDetailsInfo";
import { OrderResponse } from "../../../types/Order";
import OrderSummaryCard from "../../../component/common/OrderSummaryCard";
import useMutateDeliverOrder from "../../../hooks/api-hooks/orders/useMutateDeliverOrder";
import useMutatePayOrder from "../../../hooks/api-hooks/orders/useMutatePayOrder";
import React from "react";
import AppPageHeader from "../../../component/page/AppPageHeader";

const OrderDetailAdminPage = () => {
  const params = useParams();

  const { data: order, refetch } = useQuerySingleOrderById(params.id || "");

  const { mutate: deliverOrder, isSuccess: orderPaid } =
    useMutateDeliverOrder();

  const { mutate: payOrder, isSuccess: orderDelivered } = useMutatePayOrder(
    params.id || ""
  );

  const onPayOrder = () => {
    console.log(order?.user.email);
    payOrder({
      id: params.id || "",
      details: {
        id: params.id,
        status: "COMPLETED",
        update_time: Date.now(),
        payer: {
          email_address: order?.user.email,
        },
      },
    });
    console.log("pay order");
  };

  const onDeliverOrder = () => {
    deliverOrder({ id: params.id });
    console.log("deliver order");
  };

  //   refetch stable reference
  const refetchRef = React.useRef(refetch);

  React.useEffect(() => {
    refetchRef.current();
  }, [orderPaid, orderDelivered]);

  return (
    <AppContainer>
      <AppPageHeader title={"Order Details"} />
      <Stack
        gap={2}
        sx={{
          flexDirection: {
            lg: "row",
          },
        }}
      >
        <OrderDetailsInfo order={order as OrderResponse} />
        <OrderSummaryCard
          title={"Order Summary"}
          infoItems={[
            {
              label: "Items:",
              value: `$${order?.itemPrice}`,
            },
            {
              label: "Shipping:",
              value: `$${order?.shippingPrice}`,
            },
            {
              label: "Tax:",
              value: `$${order?.taxPrice}`,
            },
            {
              label: "Total:",
              value: `$${order?.totalPrice}`,
            },
          ]}
          useActionButtons={[
            {
              label: "Mark as Paid",
              disabled: order?.isPaid,
              onClick: onPayOrder,
            },
            {
              label: "Mark as Delivered",
              disabled: order?.isDelivered,
              onClick: onDeliverOrder,
            },
          ]}
        />
      </Stack>
    </AppContainer>
  );
};

export default OrderDetailAdminPage;

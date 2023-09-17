import { Typography } from "@mui/material";
import { OrderResponse } from "../../../types/Order";
import OrderSummaryCard from "../../../component/common/OrderSummaryCard";

type Props = {
  order: OrderResponse;
};

const OrderDetailsSummary = (props: Props) => {
  return (
    <OrderSummaryCard
      title="Order Summary"
      infoItems={[
        <>
          <Typography>Items</Typography>
          <Typography>${props.order?.itemPrice}</Typography>
        </>,
        <>
          <Typography>Shipping</Typography>
          <Typography>${props.order?.shippingPrice}</Typography>
        </>,
        <>
          {" "}
          <Typography>Tax</Typography>
          <Typography>${props.order?.taxPrice}</Typography>
        </>,
        <>
          <Typography>Total</Typography>
          <Typography>${props.order?.totalPrice}</Typography>
        </>,
      ]}
    />
  );
};

export default OrderDetailsSummary;

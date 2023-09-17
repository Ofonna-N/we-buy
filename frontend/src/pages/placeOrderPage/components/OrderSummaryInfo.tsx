import { ButtonProps, Typography } from "@mui/material";
import Cart from "../../../types/Cart";
import OrderSummaryCard from "../../../component/common/OrderSummaryCard";

type Props = {
  cart: Cart;
  placeOrderButton: {
    label: string;
    disabled: ButtonProps["disabled"];
    onClick: ButtonProps["onClick"];
  };
};

const OrderSummaryInfo = (props: Props) => {
  const infoList: React.ReactNode[] = [
    <>
      <Typography flexGrow={1}>Items:</Typography>
      <Typography>${props.cart.itemsPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Shipping:</Typography>
      <Typography>${props.cart.shippingPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Tax:</Typography>
      <Typography>${props.cart.taxPrice}</Typography>
    </>,
    <>
      <Typography flexGrow={1}>Total:</Typography>
      <Typography>${props.cart.totalPrice}</Typography>
    </>,
  ];

  return (
    <OrderSummaryCard
      title="Order Summary"
      divider
      infoItems={infoList}
      useActionButton={{
        label: props.placeOrderButton.label,
        disabled: props.placeOrderButton.disabled,
        onClick: props.placeOrderButton.onClick,
      }}
    />
  );
};

export default OrderSummaryInfo;

import { ButtonProps } from "@mui/material";
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
  return (
    <OrderSummaryCard
      title="Order Summary"
      divider
      infoItems={[
        {
          label: "Items:",
          value: `$${props.cart.itemsPrice}`,
        },
        {
          label: "Shipping:",
          value: `$${props.cart.shippingPrice}`,
        },
        {
          label: "Tax:",
          value: `$${props.cart.taxPrice}`,
        },
        {
          label: "Total:",
          value: `$${props.cart.totalPrice}`,
        },
      ]}
      useActionButtons={[
        {
          label: props.placeOrderButton.label,
          disabled: props.placeOrderButton.disabled,
          onClick: props.placeOrderButton.onClick,
        },
      ]}
    />
  );
};

export default OrderSummaryInfo;

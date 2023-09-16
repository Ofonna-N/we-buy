import { useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import { checkoutStepsActions } from "../../slices/checkoutStepsSlice";
import { Stack } from "@mui/material";
import OrderSummaryList from "./components/OrderSummaryList";
import { useNavigate } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";
import OrderSummaryInfo from "./components/OrderSummaryInfo";
import Order from "../../types/Order";
import useMutatePlaceOrder from "../../hooks/api-hooks/orders/useMutatePlaceOrder";

const PlaceOrderPage = () => {
  /* #region REDUX */
  const shippingInfo = useAppSelector(
    (state) => state.shippingInfoSlice.shippingInfo
  );

  const paymentMethod = useAppSelector(
    (state) => state.paymentMethodSlice.paymentMethod
  );

  const cart = useAppSelector((state) => state.cartSlice);

  const prevStep = useAppSelector(
    (state) => state.paymentMethodSlice.paymentMethod
  );

  const dispatch = useRef(useAppDispatch());
  /* #endregion */

  /* #region REACT ROUTER DOM */
  const navigate = useRef(useNavigate());
  /* #endregion */

  /* #region SIDE EFFECTS */
  useEffect(() => {
    if (prevStep === null) {
      navigate.current(RoutesPaths.PAYMENTMETHOD_ROUTE);
    }
  }, [prevStep]);

  useEffect(() => {
    dispatch.current(
      checkoutStepsActions.updatecheckoutBreadCrumb({
        currentStep: "Place Order",
      })
    );
  }, []);
  /* #endregion */

  const { isLoading, error, mutate } = useMutatePlaceOrder();

  const onPlaceOrder = () => {
    const nullStringsValue = "Error"; //what gets sent to the backend if we have an undefined string property

    const body: Order = {
      orderItems: cart.cartItems.map((cartItem) => ({
        name: cartItem.product.name,
        image: cartItem.product.image,
        quantity: cartItem.qty,
        product: cartItem.product._id,
      })),
      paymentMethod: paymentMethod,
      itemPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
      shippingInfo: {
        address: shippingInfo?.address || nullStringsValue,
        city: shippingInfo?.city || nullStringsValue,
        country: shippingInfo?.country || nullStringsValue,
        postalCode: shippingInfo?.postalCode?.toString() || nullStringsValue,
      },
    };
    // console.log("Request body: ", body);
    mutate(body);
  };

  return (
    <Stack
      sx={{
        flexDirection: {
          lg: "row",
        },
      }}
      gap={2}
    >
      <OrderSummaryList
        shippingInfo={shippingInfo}
        paymentMethod={paymentMethod}
        cartItems={cart.cartItems}
      />
      <OrderSummaryInfo
        cart={cart}
        usePlaceOrderButton={{
          label: "Place Order",
          disabled: isLoading,
          onClick: onPlaceOrder,
        }}
      />
    </Stack>
  );
};

export default PlaceOrderPage;

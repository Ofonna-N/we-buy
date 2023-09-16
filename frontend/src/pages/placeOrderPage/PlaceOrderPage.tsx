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
      <OrderSummaryInfo cart={cart} />
    </Stack>
  );
};

export default PlaceOrderPage;

import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import { PaymentMethodActions } from "../../slices/paymentMethodSlice";
import { useEffect, useRef, useState } from "react";
import PaymentMethodType from "../../types/PaymentMethods";
import { checkoutStepsActions } from "../../slices/checkoutStepsSlice";
import { useNavigate } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";

const PaymentPage = () => {
  const paymentMethod = useAppSelector(
    (state) => state.paymentMethodSlice.paymentMethod
  );

  const prevStep = useAppSelector(
    (state) => state.shippingInfoSlice.shippingInfo
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodType>(paymentMethod);

  const dispatch = useRef(useAppDispatch());
  const navigate = useRef(useNavigate());

  const setPaymentMethod = () => {
    dispatch.current(
      PaymentMethodActions.setPaymentMethod({
        paymentMethod: selectedPaymentMethod,
      })
    );
    dispatch.current(
      checkoutStepsActions.updateCheckoutStep({
        completedStep: "Payment Method",
      })
    );
    navigate.current(RoutesPaths.PLACE_ORDER_ROUTE);
  };

  useEffect(() => {
    if (prevStep === null) {
      navigate.current(RoutesPaths.SHIPPING_ROUTE);
    }
  }, [prevStep]);

  useEffect(() => {
    dispatch.current(
      checkoutStepsActions.updatecheckoutBreadCrumb({
        currentStep: "Payment Method",
      })
    );
  }, []);

  return (
    <Box>
      <Typography>Select Payment Method</Typography>
      <Box mb={"2rem"}>
        <FormControlLabel
          name="paypal"
          label="Paypal"
          labelPlacement="start"
          control={
            <Radio
              checked={selectedPaymentMethod === "Paypal"}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedPaymentMethod("Paypal");
                }
              }}
            />
          }
        />
      </Box>
      <Button variant="contained" onClick={setPaymentMethod}>
        Continue
      </Button>
    </Box>
  );
};

export default PaymentPage;

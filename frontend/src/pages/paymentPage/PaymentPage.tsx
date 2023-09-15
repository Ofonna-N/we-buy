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
import { useEffect, useState } from "react";
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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setPaymentMethod = () => {
    dispatch(
      PaymentMethodActions.setPaymentMethod({
        paymentMethod: selectedPaymentMethod,
      })
    );
    dispatch(
      checkoutStepsActions.updateCheckoutStep({
        completedStep: "Payment Method",
      })
    );
    navigate(RoutesPaths.PLACE_ORDER_ROUTE);
  };

  useEffect(() => {
    if (prevStep === null) {
      navigate(RoutesPaths.SHIPPING_ROUTE);
    }

    dispatch(
      checkoutStepsActions.updatecheckoutBreadCrumb({
        currentStep: "Payment Method",
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

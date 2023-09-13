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
import { useState } from "react";
import PaymentMethodType from "../../types/PaymentMethods";

const PaymentPage = () => {
  const paymentMethod = useAppSelector(
    (state) => state.paymentMethodSlice.paymentMethod
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodType>(paymentMethod);

  const dispatch = useAppDispatch();

  const setPaymentMethod = () => {
    dispatch(
      PaymentMethodActions.setPaymentMethod({
        paymentMethod: selectedPaymentMethod,
      })
    );
  };

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

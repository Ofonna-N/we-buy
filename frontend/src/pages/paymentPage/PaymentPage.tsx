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

const PaymentPage = () => {
  const paymentMethod = useAppSelector(
    (state) => state.paymentMethodSlice.paymentMethod
  );
  const dispatch = useAppDispatch();

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
              checked={paymentMethod === "Paypal"}
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch(
                    PaymentMethodActions.setPaymentMethod({
                      paymentMethod: "Paypal",
                    })
                  );
                }
              }}
            />
          }
        />
      </Box>
      <Button variant="contained">Continue</Button>
    </Box>
  );
};

export default PaymentPage;

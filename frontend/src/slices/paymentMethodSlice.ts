import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import PaymentMethodType from "../types/PaymentMethods";

type PaymentMethodSlice = {
  paymentMethod: PaymentMethodType;
};

const initialState: PaymentMethodSlice = {
  paymentMethod: "Paypal",
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethod(
      state,
      action: PayloadAction<{ paymentMethod: PaymentMethodType }>
    ) {
      state.paymentMethod = action.payload.paymentMethod;
    },
  },
});

export default paymentMethodSlice.reducer;

export const PaymentMethodActions = paymentMethodSlice.actions;

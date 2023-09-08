import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import localStorageKeys from "../constants/localStorageKeys";
import ShippingFormInput from "../types/ShippingFormInput";

const shippingInfoPersistentData = localStorage.getItem(
  localStorageKeys.SHIPPING_INFO
);

const initialState = {
  shippingInfo: ((shippingInfoPersistentData &&
    JSON.parse(shippingInfoPersistentData)) ||
    {}) as ShippingFormInput | null,
};

const shippingInfoSlice = createSlice({
  name: "shippingInfo",
  initialState,
  reducers: {
    setShippingInfo(state, action: PayloadAction<ShippingFormInput>) {
      state.shippingInfo = action.payload;
    },
    deleteShippingInfo(state) {
      state.shippingInfo = null;
    },
  },
});

export default shippingInfoSlice.reducer;

export const shippingInfoActions = shippingInfoSlice.actions;

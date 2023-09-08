import { createListenerMiddleware } from "@reduxjs/toolkit";
import { shippingInfoActions } from "../../slices/shippingInfoSlice";
import localStorageKeys from "../../constants/localStorageKeys";

const shippingInfoListener = createListenerMiddleware();

shippingInfoListener.startListening({
  actionCreator: shippingInfoActions.setShippingInfo,
  effect: (action) => {
    localStorage.setItem(
      localStorageKeys.SHIPPING_INFO,
      JSON.stringify(action.payload)
    );
  },
});

shippingInfoListener.startListening({
  actionCreator: shippingInfoActions.deleteShippingInfo,
  effect: () => {
    localStorage.removeItem(localStorageKeys.SHIPPING_INFO);
  },
});

export default shippingInfoListener;

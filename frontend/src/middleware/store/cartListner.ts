import { createListenerMiddleware } from "@reduxjs/toolkit";
import { cartActions } from "../../slices/cartSlice";
import { RootState } from "../../store";

const cartListener = createListenerMiddleware();

cartListener.startListening({
  actionCreator: cartActions.addToCart,
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;

    // console.log("Cart: ", state.cartSlice);
    localStorage.setItem("cart", JSON.stringify(state.cartSlice));
  },
});

export default cartListener;

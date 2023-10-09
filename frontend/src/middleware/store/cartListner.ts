import { createListenerMiddleware } from "@reduxjs/toolkit";
import { cartActions } from "../../slices/cartSlice";
import { RootState } from "../../store";
import localStorageKeys from "../../constants/localStorageKeys";

const cartListener = createListenerMiddleware();

cartListener.startListening({
  actionCreator: cartActions.addToCart,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartActions.updateCartData());
  },
});
cartListener.startListening({
  actionCreator: cartActions.removeFromCart,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartActions.updateCartData());
  },
});
cartListener.startListening({
  actionCreator: cartActions.updateCartData,
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;

    // console.log("Cart: ", state.cartSlice);
    localStorage.setItem(
      localStorageKeys.CART,
      JSON.stringify(state.cartSlice)
    );
  },
});

cartListener.startListening({
  actionCreator: cartActions.clearCart,
  effect: async () => {
    localStorage.removeItem(localStorageKeys.CART);
  },
});

export default cartListener;

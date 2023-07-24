import { createSlice } from "@reduxjs/toolkit";
import Cart, { CartItem } from "../types/Cart";

const persistedCartItem = localStorage.getItem("cart");

const initialState = persistedCartItem
  ? (JSON.parse(persistedCartItem) as Cart)
  : ({} as Cart);

type CartItemPayload = {
  cartItem: CartItem;
};

const toPriceDecimal = (num: number) => Number(num.toFixed(2));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: { payload: CartItemPayload }) {
      const cartItem = action.payload.cartItem; //Item passed in by the action dispacher

      const itemExist = state.cartItems.find(
        (ci) => ci.product._id === cartItem.product._id
      ); // check if item exists

      if (itemExist) {
        state.cartItems = state.cartItems.map((ci) =>
          ci.product._id === itemExist.product._id ? cartItem : ci
        ); //if item exists replace item at position, to get updated quantity
      } else {
        state.cartItems = [...state.cartItems, cartItem]; // if item doesn't exist, add item to array
      }

      //items price calclulation
      state.itemsPrice = toPriceDecimal(
        state.cartItems.reduce(
          (acc, item) => acc + item.product.price * item.qty,
          0
        )
      );

      //   shipping price
      state.shippingPrice = toPriceDecimal(state.itemsPrice > 100 ? 0 : 9.99);

      //   tax price at 15%
      state.taxPrice = toPriceDecimal(state.itemsPrice * 1.5);

      //   total price
      state.totalPrice = toPriceDecimal(
        state.itemsPrice + state.shippingPrice + state.taxPrice
      );

      // total qantity
      state.qty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;

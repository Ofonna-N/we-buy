import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cartListener from "./middleware/store/cartListner";

export const store = configureStore({
  reducer: {
    cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartListener.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

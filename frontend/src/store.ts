import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cartListener from "./middleware/store/cartListner";
import appMenuSlice from "./slices/appMenuSlice";
import userSlice from "./slices/userSlice";
import userListner from "./middleware/store/userListner";

export const store = configureStore({
  reducer: {
    cartSlice,
    appMenuSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      cartListener.middleware,
      userListner.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

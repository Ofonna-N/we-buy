import { createListenerMiddleware } from "@reduxjs/toolkit";
import { userSliceActions } from "../../slices/userSlice";
import localStorageKeys from "../../constants/localStorageKeys";

const userListner = createListenerMiddleware();

userListner.startListening({
  actionCreator: userSliceActions.setUserCredentials,
  effect: async (action) => {
    localStorage.setItem(localStorageKeys.USER, JSON.stringify(action.payload));
  },
});

userListner.startListening({
  actionCreator: userSliceActions.logoutUser,
  effect: async () => {
    localStorage.removeItem(localStorageKeys.USER);
  },
});

export default userListner;

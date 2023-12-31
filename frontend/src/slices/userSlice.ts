import { createSlice } from "@reduxjs/toolkit";
import User from "../types/User";
import localStorageKeys from "../constants/localStorageKeys";

const persistentUserInfo = localStorage.getItem(localStorageKeys.USER);

const initialState = {
  userInfo: ((persistentUserInfo && JSON.parse(persistentUserInfo)) || null) as
    | User
    | null
    | undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials(state, action) {
      state.userInfo = action.payload;
    },
    logoutUser(state) {
      state.userInfo = null;
    },
  },
});

export default userSlice.reducer;

export const userSliceActions = userSlice.actions;

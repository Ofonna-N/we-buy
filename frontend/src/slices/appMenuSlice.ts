import { createSlice } from "@reduxjs/toolkit";
import AppMenuState, { toggleMenuPayload } from "../types/AppMenu";

const initialState: AppMenuState = {
  isToggled: false,
};

const appMenuSlice = createSlice({
  name: "appMenu",
  initialState,
  reducers: {
    toggleMenu(state, action: { payload: toggleMenuPayload }) {
      state.isToggled = action.payload.toggled
        ? action.payload.toggled
        : !state.isToggled;
    },
  },
});

export default appMenuSlice.reducer;

export const appMenuAcitons = appMenuSlice.actions;

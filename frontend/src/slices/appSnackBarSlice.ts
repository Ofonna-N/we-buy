import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SnackBarSliceType = {
  snackBar: {
    message: string;
    open: boolean;
    useIcon?: {
      icon: "success" | "error";
    };
  };
};

const initialState: SnackBarSliceType = {
  snackBar: {
    message: "snack bar",
    open: false,
  },
};

const appSnackBarSlice = createSlice({
  name: "appSnackBar",
  initialState,
  reducers: {
    showAppSnackBar(
      state,
      action: PayloadAction<SnackBarSliceType["snackBar"]>
    ) {
      if (state.snackBar.open === true) state.snackBar.open = false;
      state.snackBar = action.payload;
    },
    hideAppSnackBar(state) {
      state.snackBar = { message: "", open: false };
    },
  },
});

export default appSnackBarSlice.reducer;

export const appSnackBarActions = appSnackBarSlice.actions;

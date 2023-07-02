import { useContext } from "react";
import { modeCtx } from "../providers/AppThemeProvider";

const useModeCtx = () => {
  return useContext(modeCtx);
};

export default useModeCtx;

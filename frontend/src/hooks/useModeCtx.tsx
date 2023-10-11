import { useContext } from "react";
import modeCtx from "../contexts/ModeCtx";

const useModeCtx = () => {
  return useContext(modeCtx);
};

export default useModeCtx;

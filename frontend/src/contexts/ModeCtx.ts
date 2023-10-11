import { PaletteMode } from "@mui/material";
import { createContext } from "react";

export type ModeCtx = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const modeCtx = createContext({} as ModeCtx);

export default modeCtx;

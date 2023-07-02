import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useMemo, useState } from "react";

const themeMode: { light: PaletteMode; dark: PaletteMode } = {
  light: "light",
  dark: "dark",
};

type ModeCtx = {
  mode: PaletteMode;
  toggleMode: () => void;
};

export const modeCtx = createContext({} as ModeCtx);

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === themeMode.light ? themeMode.light : themeMode.dark,
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#f50057",
          },
        },
        spacing: 8,
      }),
    [mode]
  );

  const modeCtxValue: ModeCtx = {
    mode,
    toggleMode: () => {
      setMode((prev) =>
        prev === themeMode.light ? themeMode.dark : themeMode.light
      );
    },
  };

  return (
    <modeCtx.Provider value={modeCtxValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </modeCtx.Provider>
  );
};

export default AppThemeProvider;

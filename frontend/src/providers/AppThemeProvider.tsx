import { PaletteMode, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useEffect, useMemo, useState } from "react";

const themeMode: { light: PaletteMode; dark: PaletteMode } = {
  light: "light",
  dark: "dark",
};

type ModeCtx = {
  mode: PaletteMode;
  toggleMode: () => void;
};

export const modeCtx = createContext({} as ModeCtx);

const modeKey = "mode";

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    (!(modeKey in localStorage) && prefersDarkMode) ||
      localStorage.getItem(modeKey) === themeMode.dark
      ? "dark"
      : "light"
  );

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

  useEffect(() => {
    localStorage.setItem(modeKey, mode);
  }, [mode]);

  return (
    <modeCtx.Provider value={modeCtxValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </modeCtx.Provider>
  );
};

export default AppThemeProvider;

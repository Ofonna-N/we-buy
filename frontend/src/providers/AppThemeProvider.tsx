import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({});

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;

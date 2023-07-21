import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppThemeProvider from "./providers/AppThemeProvider.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";
import StoreProvider from "./providers/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <AppThemeProvider>
        <CssBaseline />
        <RouterProvider router={routes} />
      </AppThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);

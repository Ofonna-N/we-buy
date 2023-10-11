import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppThemeProvider from "./providers/AppThemeProvider.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";
import { ReactQueryDevtools } from "react-query/devtools";
import AppQueryClientProvider from "./providers/AppQueryClientProvider.tsx";
import AppStoreProvider from "./providers/AppStoreProvider.tsx";
import AppPaypalProvider from "./providers/AppPaypalProvider.tsx";
import ConfirmationDialogProvider from "./providers/ConfirmationDialogProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppQueryClientProvider>
      <ReactQueryDevtools />
      <AppStoreProvider>
        <AppPaypalProvider>
          <AppThemeProvider>
            <ConfirmationDialogProvider>
              <CssBaseline />
              <RouterProvider router={routes} />
            </ConfirmationDialogProvider>
          </AppThemeProvider>
        </AppPaypalProvider>
      </AppStoreProvider>
    </AppQueryClientProvider>
  </React.StrictMode>
);

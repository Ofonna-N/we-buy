import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

const AppStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;

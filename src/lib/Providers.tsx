"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { theme } from "./theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;

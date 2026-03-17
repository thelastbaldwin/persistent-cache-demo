"use client";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({ cssVariables: true, palette: { mode: "dark" } });

export const ThemeProvider = ({ children }: { children?: ReactNode }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

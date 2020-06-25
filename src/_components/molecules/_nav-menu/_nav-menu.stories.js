import React from "react";
import { ThemeProvider } from "@material-ui/core";
import NavMenu from "./_nav-menu";
import { myTheme } from "../../../theme";
import { BrowserRouter } from "react-router-dom";

export default {
  component: NavMenu,
  title: "Nav-menu",
};

export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
    </ThemeProvider>
  );
};

import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import NavMenu from "./_nav-menu";
import { myTheme } from "../../../theme";
import { BrowserRouter } from "react-router-dom";

export default {
  component: NavMenu,
  title: "Nav-menu",
  decorators: [withKnobs],
};
var style = {
  backgroundColor: "#3a3d57",
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <NavMenu style={object("Style", style)} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

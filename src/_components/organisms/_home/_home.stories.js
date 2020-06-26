import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Home from "./_home";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { text } from "@storybook/addon-knobs";

export default {
  component: Home,
  title: "home",
  decorators: [withKnobs],
};

export const home = () => {
  return (
    <div style={{backgroundColor:  '#e7f1f7',}}>
    <ThemeProvider theme={myTheme}>
       <Home />
    </ThemeProvider>
    </div>
  );
};

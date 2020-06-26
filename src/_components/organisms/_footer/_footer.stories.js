import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Footer from "./_footer";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { BrowserRouter } from "react-router-dom";

export default {
  component: Footer,
  title: "Footer",
  decorators: [withKnobs],
};


export const footer = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
       <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

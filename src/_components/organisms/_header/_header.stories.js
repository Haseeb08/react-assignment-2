import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Header from "./_header";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { text } from "@storybook/addon-knobs";

export default {
  component: Header,
  title: "Header",
  decorators: [withKnobs],
};

// const style = {
//     backgroundColor: "darkslategrey",
// } 

export const header = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
       <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
};

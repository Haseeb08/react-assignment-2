import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Input from "./_input";
import { myTheme } from "../../../theme";

export default {
  component: Input,
  title: "Input field",
  decorators: [withKnobs],
};
 
var style = {
  fontSize: "15px",
  backgroundColor: "#ffffff",
  color: "#000000",
  width: "50%",
 // border: "2px solid black",
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Input
        onChange={action()}
        placeholder={text("placeholder", "Enter something")}
        onClick={action("Clicked")}
        style={object("Style", style)}
      />
    </ThemeProvider>
  );
};

import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object, text,select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import MyButton from "./_button";
import { myTheme } from "../../../theme";

export default {
  component: MyButton,
  title: "Buttton",
  decorators: [withKnobs],
};

// var props = {
//   value: "hello",
//   color: "primary",
// };

var style = {
  fontSize: "13px",
  textTransform: "none",
};
export const normal = () => {
  //const myStyle = object("style",style);

  return (
    <ThemeProvider theme={myTheme}>
      <MyButton
        value={text("value", "button")}
        color={select("color", ["primary","secondary"],"primary")}
        variant="contained"
        onClick={action("Clicked")}
        style={object("Style", style)}
      />
    </ThemeProvider>
  );
};

export const disabled = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <MyButton
        value={text("value", "the value")}
        variant="contained"
        onClick={action("Clicked")}
        disabled={true}
      />
    </ThemeProvider>
  );
};

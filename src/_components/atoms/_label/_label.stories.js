import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Label from "./_label";
import { myTheme } from "../../../theme";

export default {
  component: Label,
  title: "Label",
  decorators: [withKnobs],
};

var style = {
    fontSize: "17px",
    textAlign: "center",
    color: "#000000",
    fontStyle: "bold",
    fontFamily: "poppins",
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Label
       text={text("text","this is a label")}
        style={object("Style", style)}
      />
    </ThemeProvider>
  );
};

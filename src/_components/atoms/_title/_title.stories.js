import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Title from "./_title";
import { myTheme } from "../../../theme";

export default {
  component: Title,
  title: "Title",
  decorators: [withKnobs],
};

var style = {
    fontSize: "35px",
    textAlign: "center",
    color: "#00000",
    fontStyle: "bold",
    fontFamily: "poppins",
    fontWeight: "30px",
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Title
       title={text("text","this is a title")}
        style={object("Style", style)}
      />
    </ThemeProvider>
  );
};

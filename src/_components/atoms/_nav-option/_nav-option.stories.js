import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { withKnobs, object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import NavItem from "./_nav-option";
import { myTheme } from "../../../theme";

export default {
  component: NavItem,
  title: "Nav-item",
  decorators: [withKnobs],
};

var style = {
  fontSize: "20px",
  textAlign: "center",
 //color: "#ffffff",
  fontStyle: "bold",
  fontFamily: "poppins",
  fontWeight: "10px",

};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <NavItem title={text("title", "Home")} style={object("Style", style)} />
    </ThemeProvider>
  );
};

// export const hovered = () => {
//     return (
//       <ThemeProvider theme={myTheme}>
//         <NavItem title={text("title", "Home")} style={object("Style", style)} />
//       </ThemeProvider>
//     );
//   };
  
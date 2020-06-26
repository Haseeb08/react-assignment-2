import React from "react";
import { ThemeProvider } from "@material-ui/core";
import AddImageBox from "./_add-image";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { text } from "@storybook/addon-knobs";

export default {
  component: AddImageBox,
  title: "Add Image",
  decorators: [withKnobs],
};

const boxStyle = {
    backgroundColor: "white",
    height: "auto",
    width: "300px", 
};
const errorStyle = {
    color: "red",
    textAlign: "initial",
};

export const addImageBox = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <AddImageBox boxStyle={object("boxStyle", boxStyle)} />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export const addImageBoxError = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <AddImageBox 
      //  handleImageAdd={handleImageAdd}
        imageUrlError={text("imageUrlError","Enter a valid url")}
        imageTitleError={text("imageTitleError","Image title cannot be null")}
        boxStyle={object("boxStyle", boxStyle)}
        errorStyle={object("errorStyle", errorStyle)} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

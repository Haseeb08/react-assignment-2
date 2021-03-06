import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Gallery from "./_gallery";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { text } from "@storybook/addon-knobs";
import imagesData from "../../../images.json";

export default {
  component: Gallery,
  title: "gallery",
  decorators: [withKnobs],
};

const style = {
  backgroundColor:  '#e7f1f7',
    height: '86.5vh',
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
   // width: "60%",
    gridRowGap: "50px",
  //  gridColumnGap: "10px",
}

export const gallery = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
       <Gallery allImages={imagesData.images}
    style={object("style", style)}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

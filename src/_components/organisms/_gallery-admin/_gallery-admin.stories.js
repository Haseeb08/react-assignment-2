import React from "react";
import { ThemeProvider } from "@material-ui/core";
import GalleryAdmin from "./_gallery-admin";
import { myTheme } from "../../../theme";
import { withKnobs } from "@storybook/addon-knobs/react";
import { BrowserRouter } from "react-router-dom";
import imagesData from "../../../images.json";

export default {
  component: GalleryAdmin,
  title: "Gallery-Admin",
  decorators: [withKnobs],
};

export const gallery = () => {
  return (
      <div style={{backgroundColor:  '#e7f1f7',}}>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
       <GalleryAdmin allImages={imagesData.images}   />
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
};

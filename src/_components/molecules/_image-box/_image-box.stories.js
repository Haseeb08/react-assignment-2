import React from "react";
import { ThemeProvider } from "@material-ui/core";
import ImageBox from "./_image-box";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";

export default {
  component: ImageBox,
  title: "Image-box",
  decorators: [withKnobs],
};

const image = {
  id: "1",
  name: "React",
  url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
};

const style1 = {
  width: "250px",
  height: "auto",
  backgroundColor: "#fdfdfd",
  boxShadow: "1px 2px 1px 5px #f7f9f9",
};

export const imageBox = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <ImageBox img={object("img", image)} style={object("style", style1)} />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export const Admin = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <ImageBox
          isAdmin={true}
          img={object("img", image)}
          style={object("style", style1)}
          handleImageDelete={action("Deleting image")}
            handleImageEdit={action("Edit image")}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

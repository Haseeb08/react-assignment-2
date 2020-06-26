import React from "react";
import { ThemeProvider } from "@material-ui/core";
import ContactForm from "./_contact-form";
import { myTheme } from "../../../theme";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { text } from "@storybook/addon-knobs";


export default {
  component: ContactForm,
  title: "Contact from",
  decorators: [withKnobs],
};

export const contactForm = () => {
  return (
      <div style={{width:"50%",border:"1px solid black",borderRadius:"20px"}}>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
       <ContactForm 
   />
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
};

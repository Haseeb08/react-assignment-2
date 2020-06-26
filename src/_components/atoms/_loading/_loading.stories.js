import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Loading from "./_loading";
import { myTheme } from "../../../theme";

export default {
  component: Loading,
  title: "Loading",
};


export const loading = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Loading
      />
    </ThemeProvider>
  );
};

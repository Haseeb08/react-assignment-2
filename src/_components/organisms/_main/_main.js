import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router-dom";
import Contact from "../_contact/_contact";
import GalleryAdmin from "../_gallery-admin/_gallery-admin";
import Gallery from "../_gallery/_gallery";
import About from "../_about/_about";
import Home from "../_home/_home";
import ImagesJSON from "../../../images.json";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "86.5vh",
    backgroundColor: myTheme.palette.background.default,
  },
}));

export default function Main() {
  const [allImages, setAllImages] = useState([...ImagesJSON.images]);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Route exact path="/home" component={withRouter(Home)} />

      <Route path="/gallery">
        <Gallery allImages={allImages} />
      </Route>

      <Route path="/gallery-admin">
        <GalleryAdmin allImages={allImages} setAllImages={setAllImages} />
      </Route>

      <Route path="/contact" component={withRouter(Contact)} />

      <Route path="/about" component={withRouter(About)} />
    </div>
  );
}

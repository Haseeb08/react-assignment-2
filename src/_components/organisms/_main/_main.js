import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Contact from "../_contact/_contact";
import Gallery from "../_gallery/_gallery";
import About from "../_about/_about";
import Home from "../_home/_home";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "red",
    minHeight: "86.5vh",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  return (
   
      <div className={classes.main}>
        <Route exact path="/" component={withRouter(Home)} />

        <Route path="/gallery" component={withRouter(Gallery)} />

        <Route path="/contact" component={withRouter(Contact)} />

        <Route path="/about" component={withRouter(About)} />
      </div>
    
  );
}

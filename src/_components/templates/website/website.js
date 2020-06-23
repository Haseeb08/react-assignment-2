import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../organisms/_header/_header";
import Main from "../../organisms/_main/_main";
import Footer from "../../organisms/_footer/_footer";

const useStyles = makeStyles((theme) => ({
  template: {
    backgroundColor: "",
  },
}));

export default function Template(props) {
  const classes = useStyles();
  return (
    <div className={classes.template}>
      
    {props.header}
    {props.main}
    {props.footer}

     {/* <Header {...props}/>
     <Main {...props}/>
     <Footer /> */}
    </div>
  );
}

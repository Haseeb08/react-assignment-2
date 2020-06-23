import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "rgb(240, 243, 243)",
    minHeight: "86.5vh",
  },
}));

export default function Gallery(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
     <Typography>{props.content || "Gallery"}</Typography>
    </div>
  );
}

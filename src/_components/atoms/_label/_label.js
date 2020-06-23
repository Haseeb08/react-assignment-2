import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({}));

export default function Label(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="body2">{props.text}</Typography>
    </div>
  );
}

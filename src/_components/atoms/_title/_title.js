import React from "react";
import { Typography } from "@material-ui/core";

export default function Title(props) {
  return (
    <Typography variant="h2" style={props.style}>
      {props.title || "test title "}
    </Typography>
  );
}

import React from "react";
import { Typography } from "@material-ui/core";

export default function Label(props) {
  return (
    <div>
      <Typography variant="body2" style={props.style}>{props.text}</Typography>
    </div>
  );
}
 
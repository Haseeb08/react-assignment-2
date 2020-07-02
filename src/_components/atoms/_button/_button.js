import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  bttn: {
    textTransform: "none",
    // "&:hover": {
    // backgroundColor: myTheme.palette.common.white,
    //   color: myTheme.palette.common.black,
    // },
    "&:disabled": {
      backgroundColor: "grey",
      color: myTheme.palette.common.black,
    },
  },
}));

export default function MyButton({id,...props}) {
  const classes = useStyles();
  return (
    <Button
      color={props.color}
      variant="contained"
      onClick={props.onClick}
      className={classes.bttn}
      style={props.style}
      disabled={props.disabled}
      {...props}
    >
      {props.value}
    </Button>
  );
}

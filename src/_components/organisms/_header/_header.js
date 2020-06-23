import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavMenu from "../../molecules/_nav-menu/_nav-menu";


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "darkslategrey",
    // position: "fixed",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
     <NavMenu />
    </div>
  );
}
NavMenu.defaultProps = {};

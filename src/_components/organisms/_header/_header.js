import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavMenu from "../../molecules/_nav-menu/_nav-menu";
import {myTheme} from "../../../theme";
import { Button } from "@material-ui/core";
import Auth from "../../../Auth/Auth";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: myTheme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Header(props) {
 let auth = new Auth();
  const classes = useStyles();
  return (
    <div className={classes.header}>
     <NavMenu />
     <Button onClick={auth.logout}>logout</Button>
    </div>
  );
}
NavMenu.defaultProps = {};

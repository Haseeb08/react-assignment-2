import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavMenu from "../../molecules/_nav-menu/_nav-menu";
import { myTheme } from "../../../theme";
import { Button } from "@material-ui/core";
import { AuthContext } from "../../../AuthContext";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: myTheme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Header(props) {
  const value = useContext(AuthContext);
  const classes = useStyles();
  return (
    <div style={props.style} className={classes.header}>
      <NavMenu />
      <Button onClick={value.logout}>logout</Button>
    </div>
  );
}
NavMenu.defaultProps = {};

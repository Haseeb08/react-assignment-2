import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemBox: {
    cursor: "pointer",  
    backgroundColor: "darkslategrey",
    display: "flex",
    width: "100px ",
    height: "60px",
    justifyContent: "center",
    alignItems: "center", 

    color: "#ffffff",
    
 
    
    '&:hover':{
        backgroundColor: "lightcyan",
        color: "#000000",
    },
text: {
    fontSize: "17px",
    color: "red",
    textDecoration:"none",
},
active: {
  backgroundColor: "black",
  color: "#ffffff",
}
    
  },
}));

export default function NavItem(props) {
  const classes = useStyles();
  return (
    <div className={(props.active===true && classes.active) + " " +classes.itemBox}>
      <Typography variant="h4" className={classes.text} style={props.style}>{props.title}</Typography>
    </div>
  );
}
NavItem.defaultProps = {
  title: "Name",
  active: false,
};

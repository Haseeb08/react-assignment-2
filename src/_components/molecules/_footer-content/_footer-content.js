import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"50px",
    
  },
  text: {
    color: "white",
    
  },
  link: {
    color: "white",
  },
}));

export default function FooterContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.content} data-testid="footer">
      <div >
        <Typography className={classes.text}>
          2020 Copyright {"  :  "}
          <Link className={classes.link} href="https://github.com/Haseeb08/">
            git-haseeb
          </Link>
        </Typography>
      </div>
    </div>
  );
}

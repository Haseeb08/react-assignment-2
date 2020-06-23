import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterContent from "../../molecules/_footer-content/_footer-content";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "darkslategrey",
    width:"100%",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <FooterContent />
    </div>
  );
}

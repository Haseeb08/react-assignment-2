import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Title from "../../atoms/_title/_title";
import ContactForm from "../_contact-form/_contact-form";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "rgb(240, 243, 243)",
    minHeight: "86.5vh",
  },
  form: {
      backgroundColor: "darkslategrey",
       width: '40%',
      margin: "auto",
  }
}));

export default function Contact(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
        <Title title={"You can reach out to me by filling the following form."} />
        <div className={classes.form}>
            <ContactForm />
        </div>
    </div>
  );
}

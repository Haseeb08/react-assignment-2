import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../atoms/_title/_title";
import ContactForm from "../_contact-form/_contact-form";


const useStyles = makeStyles((theme) => ({
  main: {
  },
  form: {
    width: "40%",
    margin: "auto",
    borderRadius: "50px",
    background: "linear-gradient(145deg, #ffffff, #ffffff)",
    boxShadow: "20px 20px 60px #c4cdd2, -20px -20px 60px #ffffff",
  },
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

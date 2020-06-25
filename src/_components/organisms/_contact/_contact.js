import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../atoms/_title/_title";
import ContactForm from "../_contact-form/_contact-form";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
   // backgroundColor: myTheme.palette.background.default,
   background: 'rgb(34,193,195)',
   background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    
   minHeight: "86.5vh",
  },
  form: {
    backgroundColor: myTheme.palette.background.paper,
       width: '40%',
      margin: "auto",
      //paddingBottom: "20px",
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

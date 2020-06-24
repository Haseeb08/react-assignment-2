import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f1dfcb",
    minHeight: "86.5vh",
  },
  personal: {
    backgroundColor: myTheme.palette.background.default,
    paddingBottom: "5px",
  },
  tech: {
    backgroundColor: "#e6e6e6",
    paddingBottom: "5px",
  },
  head: {
    //fontStyle: "bold",
    fontSize: "x-large",
    fontWeight: "bold",
    paddingTop: "15px",
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* <Typography>{props.content || "About"}</Typography> */}

      <div className={classes.personal}>
        <Typography>
          <div className={classes.head}>About me</div>
          <br></br>
          Name :- Abdul Haseeb Chouhan
          <br></br>
          Contact no :- +91 **********
          <br></br>
          Email :-{" "}
          <Link href="yourhaseeb08@gmail.com">yourhaseeb08@gmail.com</Link>
          <br></br>
          Linkedin :-{" "}
          <Link href="https://github.com/Haseeb08/"> Haseeb08.</Link>
        </Typography>
      </div>
      <div className={classes.tech}>
        <Typography>
          <div className={classes.head}>Technical skills</div>
          <br></br>
          Programming languages : C, CPP, Java
          <br></br>
          Database : MySQL, PostgreSQL, H2
          <br></br>
          Front-end : HTML, CSS, bootstrap, javaScript, thymeleaf, react
        </Typography>
      </div>
      <div className={classes.personal}>
        <Typography>
          <div className={classes.head}>Project</div>
          <br></br>
          TodoApp : Springboot, react and microservices architecture.
          <br></br>
          Rehabit : Springboot, thymeleaf, mySQL database.
          <br></br>
        </Typography>
      </div>
      <div className={classes.tech}>
        <Typography>
          <div className={classes.head}>Personal details</div>
          <br></br>
          Date of Birth : 8 th July 1998.
          <br></br>
          Languages known : English, Hindi, Urdu.
          <br></br>
          Hobbies and Interests : Swimming,playing cricket and football
          <br></br>
          Travelling and Exploring new places,
          <br></br>
          Cooking, Reading Books, Watching Tv series.
          <br></br>
          Blogger :- Explore Hyderabad
          <Link href="https://itshyd.blogspot.com/">
            <br></br>check my blog..!
          </Link>
        </Typography>
      </div>
    </div>
  );
}

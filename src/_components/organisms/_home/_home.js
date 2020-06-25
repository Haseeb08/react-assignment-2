import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Title from "../../atoms/_title/_title";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
   // backgroundColor: myTheme.palette.background.default,
    minHeight: "86.5vh",
    background: 'rgb(34,193,195)',
background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
  },
  image: {
    margin: "20px auto 20px auto",
    width: "250px",
    height: "300px",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Title title="Welcome" />
      <div className={classes.image}>
        <img
          src={require("./avtar.png")}
          alt="profile pic"
          width="250"
          height="300"
          style={{borderRadius: "40%",}}
        ></img>
      </div>
      <Typography variant="h5">Abdul Haseeb</Typography>
      <Typography variant="body1">
        Incoming Fullstack engineer at Zemoso Technologies.
      </Typography>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Title from "../../atoms/_title/_title";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: myTheme.palette.background.default,
    minHeight: "86.5vh",
  },
  image: {
    margin: "20px auto 20px auto",
    borderRadius: "40%",
    width: "250px",
    height: "300px",
    backgroundColor: "grey",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Title title="Welcome" />
      {/* <Typography>{props.content || "homepage"}</Typography> */}

      <div className={classes.image}>
        <img
          src={require("./avtar.png")}
          alt="profile pic"
          width="250"
          height="300"
        ></img>
      </div>
      <Typography variant="h5">Abdul Haseeb</Typography>
      <Typography variant="body1">
        Incoming Fullstack engineer at Zemoso Technologies.
      </Typography>
    </div>
  );
}

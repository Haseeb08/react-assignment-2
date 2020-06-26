import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Title from "../../atoms/_title/_title";

const useStyles = makeStyles((theme) => ({
  main: {
   // backgroundColor: myTheme.palette.background.default,
    minHeight: "86.5vh",
   // background: 'rgb(228,243,246)',
    //background: 'linear-gradient(90deg, rgba(228,243,246,1) 0%, rgba(206,229,228,1) 35%, rgba(228,243,246,1) 100%)', 
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
          src="https://w1.pngwave.com/png/759/641/143/glasses-cartoon-face-eyewear-head-male-finger-png-clip-art-thumbnail.png"
          alt="profile pic"
          width="250"
          height="300"
          style={{borderRadius: "100%",}}
        ></img>
      </div>
      <Typography variant="h5">Abdul Haseeb</Typography>
      <Typography variant="body1">
        Incoming Fullstack engineer at Zemoso Technologies.
      </Typography>
    </div>
  );
}

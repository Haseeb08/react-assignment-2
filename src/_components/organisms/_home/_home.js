import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Title from "../../atoms/_title/_title";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "rgb(240, 243, 243)",
    minHeight: "86.5vh",

//     backgroundColor: 'rgb(2,0,36)',
// background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,180,179,1) 47%)',
  },
  image: {
    margin: "20px auto 20px auto",
    width: '250px',
     height: '300px',
     backgroundColor: 'grey',
    // backgroundImage: 'url(https://www.google.com/search?q=avatar+male+characters+profile+picure+nerd&tbm=isch&ved=2ahUKEwi3qu6wmJfqAhVD3DgGHaYJCIUQ2-cCegQIABAA&oq=avatar+male+characters+profile+picure+nerd&gs_lcp=CgNpbWcQA1CtlQNYy6sDYOSsA2gBcAB4AIABiwGIAYEGkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=N5HxXveyOMO44-EPppOgqAg&bih=695&biw=733#imgrc=KInq9VkX-AhiYM)',
  }
})); 

export default function Home(props) {
  const classes = useStyles(); 
  return (
    <div className={classes.main}>
      
      <Title title="Welcome" />
      {/* <Typography>{props.content || "homepage"}</Typography> */}
     
     <div className={classes.image} >
      <img src={require("./avtar.png")} alt="profile pic" width='250' height='300'></img>
      </div>
     <Typography variant="h5">Abdul Haseeb</Typography>
     <Typography variant="body1">Incoming Fullstack engineer at Zemoso Technologies.</Typography>
    </div>
  );
}

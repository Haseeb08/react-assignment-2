import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    login:{
        backgroundImage:  "URL(https://soft-garage.com/assets/images/bannar/g5.jpg)",
       width: "auto",
        height: "100vh",
        backgroundSize: "cover",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        width: "500px",
        marginBottom: "3em",
    },
    headingContent: {
        color:"#ffffff",
        fontSize : "60px",
        //backgroundColor : "red",
    },
    loginButton: {
      cursor: "pointer",
      width: "150px",
      height: "50px",  
      border: "2px solid #ffffff",
      borderRadius: "50px",
     // backgroundColor: "#ffffff",
     background: 'rgb(240,240,240)',
background: 'linear-gradient(90deg, rgba(240,240,240,1) 0%, rgb(197, 215, 227) 30%)',
     
    },
    loginButtonContent: {
        margin: "12px",
        color: "current-color",
    },
}));

function Login(props) {
const classes=useStyles();    
    return(
        <div className={classes.login}>
            
            
           <div className={classes.heading} >
               <Typography className={classes.headingContent}>Private portfolio</Typography>
           </div>
            <div onClick={props.auth.login} className={classes.loginButton} >
                <Typography className={classes.loginButtonContent}>Get Started</Typography>
            </div>
            {/* <button onClick={()=> props.auth.customLogin("haseebchouha41@gmail.com","H@seeb08")}>Login</button>
            <button onClick={()=> props.auth.customSignup("haseebchouha41@gmail.com","H@seeb08")}>Signup</button> */}
        </div>
    )
}
export default Login;



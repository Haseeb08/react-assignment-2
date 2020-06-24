import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Label from "../../atoms/_label/_label";
import InputBox from "../../atoms/_input/_input";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "20px",
    padding: "20px 50px 20px 50px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
  },
  firstName: {
    marginTop: "10px",
  },
  input: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "5px",
    marginTop: "5px",
    borderRadius: "4px",
  },
  button: {
    margin: "40px auto 0 auto",
    width:"80%",
  },
  button1: {
    color: "#000000",
    textTransform: "none",
    width:"100%",
    backgroundColor: "#ffffff",
    '&:hover':{
        backgroundColor: "#fffff3",
    }
  },
}));

export default function ContactForm() {
  const classes = useStyles();
//     const [error,setError]=useState(false);
// const errorMessage=""
const handleSubmit=()=>{
alert("Button is clicked");
}

  return (
    <div className={classes.form}>
      <div className={classes.firstName}>
        <Label text={"First name"} />
       <InputBox type={"text"} placeholder={"first name"} />
  
      </div>
      <div className={classes.firstName}>
      <Label text={"Last name"} />
      <InputBox type={"text"} placeholder={"first name"} />
      </div>
      <div className={classes.firstName}>
      <Label text={"Email"} />
      <InputBox type={"email"} placeholder={"email"} />
      </div>
      <div className={classes.firstName}>
      <Label text={"Phone number"} />
      <InputBox type={"text"} placeholder={"phone number"} />
      </div>
      <div className={classes.firstName}> 
      <Label text={"Subject"} />
      <InputBox type={"text"} placeholder={"Subject"} />
      </div>
      <div className={classes.button}>
        <Button onClick={()=>handleSubmit()} className={classes.button1}>Submit</Button>
      </div>
    </div>
  );
}

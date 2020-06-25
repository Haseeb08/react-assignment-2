import React from "react";
import "./App.css";
import Homepage from "./pages/home/home";
import { myTheme } from "./theme";
import Login from "./pages/login/login"
import ErrorPage from "./pages/error/error";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Callback from "./Auth/callback";

let component = "";

function App(props) {
  switch (window.location.pathname) {
    case "/":
      component = <Login {...props} />;
      break;
    case "/callback":
      component = <Callback />;
      break;
    case "/home":
      component = props.auth.isAuthenticated()? <Homepage {...props}/> :<ErrorPage /> ;
      break;
    default:
      component = <ErrorPage />;
  }  
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          {component}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

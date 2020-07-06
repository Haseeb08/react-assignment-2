import React, { useContext } from "react";
import "./App.css";
import Homepage from "./pages/home/home";
import Login from "./pages/login/login";
import ErrorPage from "./pages/error/error";
import Callback from "./Auth/callback";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";


let component = "";

function Routes() {

    const value = useContext(AuthContext);

  switch (window.location.pathname) {
    case "/":
      component = <Login />;
      break;
    case "/callback": 
      component = <Callback />;
      break;
    case "/home":
      component = value.isAuthenticated() ? (
        <Homepage />
      ) : (
        <ErrorPage />
      );
      break;
    default:
      component = <ErrorPage />;
  }
  return <div>
      {/* <switch>
      <Route path="/" exact component={Login} />
      <Route path="/callback" component={Callback} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/home" component={Homepage} />
      </switch> */}

      {component}</div>;
}

export default Routes;

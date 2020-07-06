import React from "react";
import "./App.css";
import { myTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import { AuthProvider } from "./AuthContext";

function App() { 
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <AuthProvider>
          <Routes />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

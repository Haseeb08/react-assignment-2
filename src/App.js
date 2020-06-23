import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavItem from './_components/atoms/_nav-option/_nav-option';
import NavMenu from './_components/molecules/_nav-menu/_nav-menu';
import Header from './_components/organisms/_header/_header';
import Footer from './_components/organisms/_footer/_footer';
import Main from './_components/organisms/_main/_main';
import Template from './_components/templates/website/website';
import Homepage from './pages/home/home';
import {myTheme} from "./theme";

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (

     <div >
     {/* <NavItem /> */}
     {/* <NavMenu /> */}
     {/* <Header /> */}
     {/* <Footer /> */}
     {/* <Main /> */}
     {/* <Template /> */}
   <BrowserRouter>
   <ThemeProvider theme={myTheme}>
     <Homepage />
     </ThemeProvider>
    </BrowserRouter> 
   </div>

  );
  
}

export default App;

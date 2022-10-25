import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";
import "index.css";
import Contact from "./Contact";
import About from "./About";
import Signup from "./Newsignup";
import Dashboard from "./Dashboard";
//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
//import { ThemeProvider } from 'theme-ui';

//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

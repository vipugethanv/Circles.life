import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "index.css";
import Contact from "./Contact";
import About from "./About";
import Signup from "./Signup";
//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
//import { ThemeProvider } from 'theme-ui';

//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>

const App = () => {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />} exact></Route>
      <Route path="/About" element={<About />} exact></Route>
      <Route path="/Contact" element={<Contact />} exact></Route>
    </Routes>
  );
};

export default App;

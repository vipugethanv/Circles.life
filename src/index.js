import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "rebass";
import "index.css";
import Contact from "./Contact";
import About from "./About";
import Signup from "./Signup";
import App from "./App";
//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
//import { ThemeProvider } from 'theme-ui';

//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>

const Home = () => {
  return (
    <div className="centre">
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="Signup">Signup</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>

            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <App />
      </Router>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Home />);

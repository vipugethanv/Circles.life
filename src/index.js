import { render } from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";
import "index.css";
//import Contact from "./Contact";
//import About from "./About";
//import App from "./App";

import Contact from "./Contact";
import About from "./About";
import Signup from "./Newsignup";
import Dashboard from "./Dashboard";

const root = createRoot(document.getElementById("root"));
//const root = createRoot(container);
//root.render(<App />);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);

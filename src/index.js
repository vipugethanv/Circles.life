import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "index.css";
import Contact from "./Contact";
import About from "./About";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

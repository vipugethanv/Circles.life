import { render } from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "index.css";
//import Contact from "./Contact";
//import About from "./About";
//import App from "./App";

import About from "./About";
import Signup from "./Newsignup";
import Dashboard from "./Dashboard";

//Redux
import { Provider } from 'react-redux';
import configuresStore from "./store/configuresStore"; // pass the store in our application
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const root = createRoot(document.getElementById("root"));
//const root = createRoot(container);
//root.render(<App />);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);

const store = configuresStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

const dispatch = useDispatch();
const userDetails = {
  email: "admin@hello.world",
  password: "circles111"
}
dispatch( loginSuccess(userDetails) )

const userData = useSelector((store) => store)

export default configuresStore;
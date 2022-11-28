import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//import "About.css"

history;

const LOGIN_API_ERROR_CODE = 400;
const LOGIN_API_SUCCESS_CODE = 200;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const body = { usermail: username, userpassword: password };

    const response = await fetch("http://localhost:3000/user-service/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });
    const data = await response.json();
    //console.log("Test");
    console.log(data);

    if (response.status === LOGIN_API_ERROR_CODE) {
      console.log("login Failed");
      alert("login Failed");
    } else if (response.status === LOGIN_API_SUCCESS_CODE) {
      navigation("/Dashboard", {
        state: {
          email: data.email,
        },
      });
    }
  };

  return (
    <div className="centre">
      <h1>Login to pick a Challenge</h1>
      <form method="post" onSubmit={submitHandler}>
        <div className="loginpage">
          <label>Username </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="loginpage">
          <label>Password </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input data-testid="submit_button" type="submit" value="Login" />
        <br></br>
        <br></br>

        <div className="App">
          <ul>
            <li>
              <Link to="/About">About Us</Link>
            </li>

            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Signup;

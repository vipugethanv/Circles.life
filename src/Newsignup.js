import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("Rendering...", username);

  const submitHandler = (e) => {
    e.preventDefault(); 

    console.log("username: " + username);
    console.log("password: " + password);
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

        <input type="submit" value="Login" />
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

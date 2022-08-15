import React from "react";
import "index.css";

const Signup = () => {
  return (
    <div className="centre">
      <h1>Login to pick a Challenge</h1>
      <form method="post">
        <div className="loginpage">
          <label>Username </label>
          <input type="text" required />
        </div>

        <div className="loginpage">
          <label>Password </label>
          <input type="password" required />
        </div>

        <input type="submit" value="Login" />
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default Signup;

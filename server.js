const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log("Server Connected");
});

const email = "admin@hello.world";
const password = "circles111";
const name = "vipu";
const age = "25";

app.post("/user-service/login", (req, res) => {
  const usermail = req.body.usermail;
  const userpassword = req.body.userpassword;

  if (email == usermail && password == userpassword) {
    return res.status(200).send("Login Success");
  } else {
    return res.status(400).send("Login Failed");
  }
});

app.get("/user-service/user-details", (req, res) => {
  const id = "001";
  const name = "Admin";
  const age = "25";
  return res.status(200).json({ id, name, age });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "Newsignup.js");
});

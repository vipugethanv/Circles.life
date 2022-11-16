const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(express.static("build"));
app.listen(port, () => {
  console.log("Server Connected");
});

const email = "admin@hello.world";
const password = "circles111";

app.post("/user-service/login", (req, res) => {
  const usermail = req.body.usermail;
  const userpassword = req.body.userpassword;

  if (email == usermail && password == userpassword) {
    return res.status(200).json({ message: "login success",email:usermail});
  } else {
    return res.status(400).json({ message: "login failed" });
  }
});

app.get("/user-service/user-details", (req, res) => {
  const id = "001";
  const name = "Admin";
  const age = "25";
  return res.status(200).json({ id, name, age });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

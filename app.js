// MODULE CONSTANTS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const { user } = require("./db");
const app = express();

let users = [];
// Mongoose code
// const connectedToDb = () => {
//   console.log("Connected to database");
// }

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', connectedToDb)

// OTHER GLOBAL CONSTANTS/VARIABLES
let PORT;
let userLoggedIn = false;

// SETTING FOR THE MODULES USED

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// GET AND POST ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let flag = false;
  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      console.log(
        `User with username: ${username} and password: ${password} exists and is now logged in`
      );
      res.render("user", {
        username: username,
      });
      flag = true;
    }
  });
  if (flag === false) {
    res.redirect("/register");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.render("user", {
    username: username,
  });
});

// STARTING THE SERVER ON THE APPROPRIATE PORT
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}
app.listen(PORT, () => {
  console.log("Server running on port 3000 or previously defined port");
});

// MODULE CONSTANTS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
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

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users.push({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(users);
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

// MODULE CONSTANTS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const User = require("./models/userModel");
const { user } = require("./db");
const app = express();

let users = [];
// Mongoose code
const connectedToDb = () => {
  console.log("Connected to database");
};

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", connectedToDb);

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
  const username = req.body.username;
  const password = req.body.password;

  User.findOne(
    {
      username: username,
      password: password,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result !== null) {
        res.render("user", { username: username });
      } else {
        res.redirect("/register");
      }
    }
  );
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let new_user = new User({
    username: username,
    password: password,
  });

  new_user.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("user", { username: username });
    }
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

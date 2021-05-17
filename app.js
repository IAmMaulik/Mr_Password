// MODULE CONSTANTS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const User = require("./models/userModel");
const app = express();
const bcrypt = require("bcrypt");

// Mongoose code
const connectedToDb = () => {
  console.log("Connected to database");
};

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", connectedToDb);

// OTHER GLOBAL CONSTANTS/VARIABLES
let PORT;
let saltRounds = 12;

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

  User.find(
    {
      username: username,
    },
    (err, results) => {
      if (err) {
        console.log(`Error in finding in DB: ${err}`);
      } else if (results === [] || !results) {
        res.redirect("/register");
      } else {
        results.forEach((result) => {
          bcrypt.compare(password, result.password, (errorInBcrypt, answer) => {
            if (errorInBcrypt) {
              console.log(`Error in Bcrypt: ${errorInBcrypt}`);
            } else if (answer) {
              res.render("user", { username: username });
            } else {
              res.redirect("/register");
            }
          });
        });
      }
    }
  );
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    } else {
      let new_user = new User({
        username: username,
        password: hash,
      });

      new_user.save((errInSaving, result) => {
        if (errInSaving) {
          console.log(errInSaving);
        } else {
          res.render("user", { username: username });
        }
      });
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

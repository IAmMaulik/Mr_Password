// MODULE CONSTANTS
const express = require("express");
const bodyParser = require("body-parser");

// OTHER GLOBAL CONSTANTS/VARIABLES
let PORT;

const app = express();

// SETTING FOR THE MODULES USED
app.use(express.static("public"));
app.set("view engine", "ejs");

// GET AND POST ROUTES
app.get("/", (req, res) => {
  res.render("home");
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

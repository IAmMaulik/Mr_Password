const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is taken from the backend");
});

let PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 4000;
}

app.listen(PORT, () => {
  console.log("Server running on *:4000");
});

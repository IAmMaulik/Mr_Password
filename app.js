const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000 or previously defined port");
});

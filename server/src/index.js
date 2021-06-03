const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("This is taken from the backend");
  console.log("Data sent to frontend");
});

app.post("/getPost", (req, res) => {
  console.log(req.body.title);
})

let PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 4000;
}

app.listen(PORT, () => {
  console.log("Server running on *:4000");
});

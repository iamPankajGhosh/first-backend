require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
  res.send("welcome facbook");
});

app.get("/twitter", (req, res) => {
  res.send("welcome twitter");
});

app.get("/linkedin", (req, res) => {
  res.send("welcome linkedin");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

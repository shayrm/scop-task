
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is my api app...");
  console.log("access log: GET, /");
});

app.get("/v1/test", (req, res) => {
  res.send("This is Scopio Labs");
  console.log("access log: GET, v1/test");
});

app.get("/v1/health", (req, res) => {
  res.send("I am alive...");
  console.log("access log: GET, v1/health");
});

app.listen(8080, () => {
  console.log("listening");
});
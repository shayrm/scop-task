
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("");
  console.log("access log: GET, /");
});

app.get("/v1/test", (req, res) => {
  res.send("This is Scopio Labs - testing");
  console.log("access log: GET, v1/test");
});

app.get("/v1/health", (req, res) => {
  res.send("I am alive...");
  console.log("access log: GET, v1/health");
});

app.listen(8080, () => {
  console.log("Server is Ready. Listening...");
});


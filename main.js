const express = require("express");
// import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("get request");
  res.send("Hello World35!");
});
app.get("/index", (req, res) => {
  console.log("html file served");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  console.log("POST t request");
  res.send("Hello World Post!");
});
app.get("/tshirt", (req, res) => {
  console.log("tshirt log");
  res.send({
    tshirt: '👕',
    size: 'medium'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

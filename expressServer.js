const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const errorPage = require("./views/404.html");
const aboutPage = require("./views/about.html");
const contactPage = require("./views/contact.html");
const indexPage = require("./views/index.html");

app.get("/", (req, res) => {
  // const filePath = path.resolve(__dirname, "/views/index.html");
  // res.sendFile(filePath);
  // res.render('index')
  res.send("Homepage")
});

app.get('/about', (req, res) => {
  // const filePath = path.resolve(__dirname, "/views/about.html");
  // res.sendFile(filePath);
  res.send("about page");
})

app.get('/contact', (req, res) => {
  // const filePath = path.resolve(__dirname, "/views/contact.html");
  // res.sendFile(filePath);
  res.send("contactPage");
})

app.get('/404', (req, res) => {
  // const filePath = path.resolve(__dirname, "/views/404.html");
  // res.sendFile(filePath);
  res.send("errorPage");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
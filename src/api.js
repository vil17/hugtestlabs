// src/api.js
const express = require("express");
const greeting = require("./greeting");

const app = express();



app.get("/greeting/:name", (req, res) => {
// Fill in your code that:
// 1. set's the status code to 200
// 2. and returns an object with the greeting
// Hint: `req.params.name`
res.status(200).send({ greeting: greeting(req.params.name)})
});




module.exports = app;
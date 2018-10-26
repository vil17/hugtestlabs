const express = require("express");
const routergame = express.Router();
const game = require("../logic/game");






/*
routergame.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

*/
routergame.get("/", (req, res) => {
  res.status(200).send(game());
});


module.exports = routergame;
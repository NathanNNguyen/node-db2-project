const express = require('express');
const carRouter = require('./cars/carRouter');
const server = express();

server.use(express.json());

server.get(`/`, (req, res) => {
  res.send(`It's working`);
})

server.use(`/api/cars`, carRouter);

module.exports = server;
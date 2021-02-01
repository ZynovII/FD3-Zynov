"use strict";

const http = require("http");
const dataJSON = require("./clientsData.json");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "test/json; utf-8",
    "Access-Control-Allow-Origin": "http://localhost:8080"
  });
  res.end(JSON.stringify(dataJSON));
});

server.listen(PORT, () => console.log("Server started on port "+PORT));
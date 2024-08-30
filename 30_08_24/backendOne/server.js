const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hi from server.js");
})

app.listen(3000, () => {
  console.log("Server running on 3000 port");
})
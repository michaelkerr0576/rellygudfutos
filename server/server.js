const express = require('express');
const http = require("http");
const app = require("./app");

// Handle production build, comment out to run dev build
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public"));
  // Handle single page app
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`));
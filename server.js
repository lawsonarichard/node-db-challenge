const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projects/projects-router");
const resourceRouter = require("./resources/resources-router");
const server = express();
server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

module.exports = server;

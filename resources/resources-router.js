const express = require("express");

const resourcedb = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  resourcedb
    .findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: "Error in GETTING resources" });
    });
});

router.post("/", (req, res) => {
  resourcedb
    .addResources(req.body)
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: "Error in POSTING to resources" });
    });
});

module.exports = router;

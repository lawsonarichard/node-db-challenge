const express = require("express");

const projectdb = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  projectdb
    .find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "Error in GETTING projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  projectdb
    .findById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: `Error in GETTING project with that ID number = ${id}`
      });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  projectdb
    .addTask(id, task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "Error POSTING new task" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  projectdb
    .findTask(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ error: "Error GETTING tasks." });
    });
});

router.post("/", (req, res) => {
  projectdb
    .add(req.body)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Error in POSTING" });
    });
});

module.exports = router;

const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  addTask,
  findTask
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id });
}

function add(projects) {
  return db("projects").insert(projects);
}

function update(changes, id) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .delete();
}

function addTask(id, task) {
  return db("tasks")
    .where({ projects_id: id })
    .insert(task);
}
function findTask(id) {
  return db("projects")
    .innerJoin("tasks", "tasks.project_id", "projects.id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.completed",
      "tasks.project_id"
    )
    .where({ project_id: id });
}

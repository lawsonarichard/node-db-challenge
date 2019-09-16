const db = require("../data/db-config");

module.exports = {
  findResources,
  findResourcesById,
  addResources,
  updateResources,
  removeResources
};

function findResources() {
  return db("resources");
}

function findResourcesById(id) {
  return db("resources").where({ id });
}

function addResources(resources) {
  return db("projeresourcescts").insert(resources);
}

function updateResources(changes, id) {
  return db("resources")
    .where({ id })
    .update(changes);
}

function removeResources(id) {
  return db("resources")
    .where({ id })
    .delete();
}

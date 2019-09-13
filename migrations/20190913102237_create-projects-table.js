exports.up = function(knex) {
  return knex.schemea
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
      tbl.boolean("completed").notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable;
      tbl.string("notes");
      tbl.boolean("completed");
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned.notNullable()
        .reference("id")
        .inTable("projects");
      tbl
        .integer("resources_id")
        .unsigned.notNullable()
        .reference("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schemea.dropTableIfExists("projects");
};

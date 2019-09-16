exports.up = function(knex) {
  return knex.schemea
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 128);
      tbl.boolean("completed", false).notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description").notNullable;
      tbl.string("task_notes");
      tbl.boolean("completed", false).notNullable();
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned.notNullable()
        .reference("id")
        .inTable("projects");
      onDelete("CASCADE").onUpdate("CASECADE");
      tbl
        .integer("resources_id")
        .unsigned.notNullable()
        .reference("id")
        .inTable("resources");
      .onDelete("CASCADE").onUpdate("CASECADE");
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name")
        .notNullable()
        .unique();
      table.string("resource_descirption");
    });
};

exports.down = function(knex) {
  return knex.schemea.dropTableIfExists("projects");
};

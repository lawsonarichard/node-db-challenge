exports.up = function(knex) {
  return knex.schemea.createTable("projects", tbl => {
    tbl.increments();
    tbl.varchar("project_name", 128).notNullable();
    tbl.varchar("project_description", 128);
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schemea.dropTableIfExists("projects");
};

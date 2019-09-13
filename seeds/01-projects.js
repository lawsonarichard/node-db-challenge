exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Start the seeds",
          project_description: "Put them in the ground",
          completed: "false"
        }
      ]);
    });
};

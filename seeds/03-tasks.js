exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { task_description: "task 1", task_notes: "notes 1" },
        { task_description: "task 2", task_notes: "notes 2" }
      ]);
    });
};

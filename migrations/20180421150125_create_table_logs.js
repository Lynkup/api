
exports.up = function(knex, Promise) {
  return knex.schema.createTable('logs', table => {
      table.increments();
      table.text('content');
      table.string('title');
      table.string('summary')
      table.string('name');
      table.string('edit_code', 6);
      table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('logs');
};

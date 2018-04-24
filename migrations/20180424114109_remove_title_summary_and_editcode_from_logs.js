
exports.up = function(knex, Promise) {
  return knex.schema.table('logs', table => {
      table.dropColumn('title');
      table.dropColumn('summary');
      table.dropColumn('edit_code');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('logs', table => {
        table.string('title');
        table.string('summary');
        table.string('edit_code');
    })
};

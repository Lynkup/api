
exports.up = function(knex, Promise) {
    return knex.schema.table('logs', table => {
        table.string('edit_code', 3);
    });
};

exports.down = function(knex, Promise) {
    table.dropColumn('edit_code', 3);
};

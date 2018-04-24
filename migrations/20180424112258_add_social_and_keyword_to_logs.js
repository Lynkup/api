
exports.up = function(knex, Promise) {
    return knex.schema.table('logs', table => {
        table.string('facebook_id');
        table.string('linkedin_id');
        table.string('instagram_id');
        table.string('twitter_id');
        table.string('keyword');
    })
};

exports.down = function(knex, Promise) {
    table.dropColumn('facebook_id');
    table.dropColumn('linkedin_id');
    table.dropColumn('instagram_id');
    table.dropColumn('twitter_id');
    table.dropColumn('keyword');
};

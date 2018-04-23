const knex = require('../db');
const editCodeMaker = () => {
    return Math.random().toString(36).slice(2, 8).toUpperCase()
}

const index = () => {
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .then(rows => rows) // knex returns an array of objects, each with their respective column name and their rows. In this case "rows"
        .catch(error => { console.error(error); }); // the error catching
};

const show = log_id => {
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .where('id', log_id) // SELECT * FROM logs WHERE id = id;
        .then(rows => rows[0]) // Return that one
        .catch(error => { console.error(error); })
}

const create = ({ name, title, summary, content }) => {
    let edit_code = editCodeMaker();
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .returning('*') // Knex returns the columns of the fields you will be putting the data into
        .insert({ name, title, summary, content, edit_code}) // it inserts the provided data
        .then(row => row[0]) // Returns the created record
        .catch(error => { console.error(error); });
}

const update = (log_id, updates) => {
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .returning('*') // Knex returns all columns
        .update({ ...updates, updated_at: new Date(Date.now()).toISOString() }) // 
        .where('id', log_id)
        .then(row => row[0])
        .catch(error => { console.error(error); });
}

const destroy = log_id => {
    return knex('logs')
        .returning('*')
        .del()
        .where('id', log_id)
        .then(row => row[0])
        .catch(error => { console.error(error); })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
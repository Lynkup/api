const knex = require('../db');
//HELPER FUNCTIONS

const findMatches = (queryStr, logArray) => {

    let searchArray = queryStr.toLowerCase().split(' ').sort();
    let resultsArray = [];
    let rankAndPercentages = [];

    logArray.forEach(log => {
        let logContentArray = log.content.toLowerCase().split(' ').sort();
        resultsArray.push(
            results = {
                name: log.name,
                id: log.id,
                length: logContentArray.length,
                matches: 0
            });
        searchArray.forEach(searchWord => {
            logContentArray.forEach(logWord => {
                if (searchWord === logWord) {
                    results.matches++;
                }
            })
        })
    })
    resultsArray.forEach(result => {
        if(Math.floor((result.matches/result.length * 100) > 0)) {
        rankAndPercentages.push(
            stats = {
                id: result.id,
                name: result.name,
                percentMatch: Math.floor(result.matches / result.length * 100),
                rank: Math.floor(result.matches / result.length * 100 * result.matches)
            }
        )}
    })
    return rankAndPercentages.sort((current, next) => { return next.rank - current.rank })
}


// DATABASE CALLS
const index = () => {
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .then(rows => rows) // knex returns an array of objects, each with their respective column name and their rows. In this case "rows"
        .catch(error => { console.error(error); }); // the error catching
}

const search = queryStr => {
    return knex('logs')
    .then(rows => {
       return findMatches(decodeURI(queryStr), rows);
    })
    .catch(error => { console.error(error); }); // the error catching
}

const show = log_id => {
    return knex('logs') // call knex on table AKA SELECT * FROM logs
        .where('id', log_id) // SELECT * FROM logs WHERE id = id;
        .then(rows => rows[0]) // Return that one
        .catch(error => { console.error(error); })
}

const create = ({ name, title, summary, content }) => {
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
    search,
    show,
    create,
    update,
    destroy
}
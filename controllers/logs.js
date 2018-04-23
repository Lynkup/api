const logModel = require('../models/log');

const index = (req, res) => {
    logModel.index()
    .then( result => { res.json(result);})
    .catch( error => { console.error( error);});
}

const search = (req, res) => {
    logModel.search(req.query.s)
    .then( result => {res.json(result);})
    .catch(error => { console.error(error); });
}

const show = (req, res) => {
    logModel.show(req.params.log_id)
        .then(result => {res.json(result);})
        .catch(error => { console.error(error); });
}

const create = (req, res) => {
    logModel.create(req.body)
        .then(result => { res.json(result); })
        .catch(error => { console.error(error); })
}

const update = (req, res) => {
    logModel.update(req.params.log_id, req.body)
        .then(result => { res.json(result); })
        .catch(error => { console.error(error); })
}

const destroy = (req, res) => {
    logModel.destroy(req.params.log_id)
        .then(result => { res.json(result); })
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
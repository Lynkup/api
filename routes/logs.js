const express = require('express');
const router = express.Router();
const logController = require('../controllers/logs');

router.get('/', logController.index);
router.get('/:log_id', logController.show);
router.post('/', logController.create);
router.put('/:log_id', logController.update);
router.delete('/:log_id', logController.destroy);

module.exports = router;
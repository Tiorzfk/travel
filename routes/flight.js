var express = require('express');
var flight = require('../controllers/flightController');
var router = express.Router();

/* GET users listing. */
router.get('/', flight.index);
router.get('/:id', flight.detail);
router.post('/', flight.simpan);
router.post('/edit', flight.simpanEdit);

module.exports = router;

var express = require('express');
var airport = require('../controllers/airportController');
var router = express.Router();

/* GET users listing. */
router.get('/', airport.index);
router.get('/:id', airport.detail);
router.post('/', airport.simpan);
router.post('/edit', airport.simpanEdit);

module.exports = router;

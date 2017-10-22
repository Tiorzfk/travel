var express = require('express');
var airplane = require('../controllers/airplaneController');
var router = express.Router();

/* GET users listing. */
router.get('/', airplane.index);
router.get('/:id', airplane.detail);
router.post('/', airplane.simpan);
router.post('/edit', airplane.simpanEdit);
router.post('/delete', airplane.delete);

module.exports = router;

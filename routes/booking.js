var express = require('express');
var booking = require('../controllers/bookingController');
var router = express.Router();

/* GET users listing. */
router.get('/', booking.index);
router.get('/:id', booking.detail);
router.post('/', booking.simpan);

module.exports = router;
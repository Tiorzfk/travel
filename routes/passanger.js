var express = require('express');
var passanger = require('../controllers/passangerController');
var router = express.Router();

/* GET users listing. */
router.get('/', passanger.index);
router.get('/:id', passanger.detail);
router.post('/edit', passanger.simpanEdit);
router.post('/delete', passanger.delete);

router.post('/login', passanger.login);
router.post('/register', passanger.register);
router.get('/confirm/email', passanger.confirm);

module.exports = router;

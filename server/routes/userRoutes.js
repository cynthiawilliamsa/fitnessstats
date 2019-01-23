const express = require('express');
const router = express.Router();
const {list,show,create,update,remove} = require('../controllers/userController');

router.get('/users', list);
router.post('/users', create);

module.exports = router;


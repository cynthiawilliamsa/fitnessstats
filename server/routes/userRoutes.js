const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const mongoose = require('mongoose');

//load user model
require('../models/userModel');
const User = mongoose.model('user');

//User Register route
router.get('/register', (req, res) => {
    console.log("/register")
    res.send("register");
});



module.exports = router;
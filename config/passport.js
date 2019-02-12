const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Load User Model
const User = mongoose.model('user');

//passed in from server/index.js
module.exports = function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
        console.log(email);
    }));
}

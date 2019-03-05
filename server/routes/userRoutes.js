const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const mongoose = require('mongoose');

//load user model
require('../models/userModel');
const User = mongoose.model('user');

//User Register route
router.get('/users/register', (req, res) => {
    console.log("/users/register")
    res.render("/users/login");
});

//Login form Post
router.post('users/login', (req, res, next)=> {
  passport.authenticate('local', {
    successRedirect: "/landing",
    failureRedirect: '/login',
    failureFlash: false
  })(req, res, next);
  return res.redirect('/landing');
})

//register form post
router.post('/users/register', (req, res)=>{
    let errors = [];
    console.log(req.body);
    if (req.body.password != req.body.password2) {
      errors.push({ text: "Passwords do not match" });
    }
    if (!req.body.password || req.body.password.length < 6) {
      errors.push({ text: "Password must be atleast 4 characters." });
    }

    if (errors.length > 0) {
      res.status(400).json( {
        errors: errors,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });
    } else {
        //find user email and check if already registered
      User.findOne({ email: req.body.email }).then(user => {
          
        if (user) {
            errors.push({ text: "user exists"})       
             //creating new user
        } else {
          const newUser = new User(req.body);
          //hashing password befoe store in DB
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
          
                  res.send();
                })
                .catch(err => {
                  console.log(err);
                  return;
                });
            });
          });
        }
      });
    }
  });


module.exports = router;
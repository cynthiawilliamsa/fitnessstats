const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

function list(req, res) {
    userModel.find().exec().then((entries)=> {
        return res.json(entries);
    });
}

function create(req, res) {    
    console.log(req.body)
    const {body} = req;
    const {password} = body;
    let {email} = body;
    if(!email) {
        return res.send({
            success: false,
            message: "error: emaild cannot be blank."
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: "error: password cannot be blank."
        });
    }
    email = email.toLowerCase();
    email = email.trim();

    //steps:
    //1. verify email doesn't exist
    //2. save
    userModel.find({
        email: email
    }, (err, previousUsers) => {
        if(err) {
            return res.send({
                success: false,
                message: "error: server error."
            });
        } else if(previousUsers.length > 0) {
            return res.send({
                success: false,
                message: "error: account already exists."
            })
        }
    })
    const newUser = new userModel();
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
        if(err) {
            return res.send({
                success: false,
                message: "error: Server Error 2."
            });           
        }
        return res.send({
            success: true,
            message: "signed up."
            });        
        });   
    } //end of sign up endpoint.


module.exports = {list, create}
  
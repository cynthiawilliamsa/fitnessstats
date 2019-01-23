const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema ({   
    email: {
        type: String,
        default: "",
        required: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    signUpDate: {
        type: Date,
        default: Date.now(),
    }    
});

schema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

schema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', schema);
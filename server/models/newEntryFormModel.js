let mongoose = require('mongoose');
const schema = new mongoose.Schema({
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    bodyFat: {
        type: Number
    },
    leanMass: {
        type: Number
    },
    bicepR: {
        type: Number
    },
    chest: {
        type: Number
    },
    waist: {
        type: Number
    },
    thighR: {
        type: Number
    },
    bicepL: {
        type: Number
    },
    neck: {
        type: Number
    },
    hips: {
        type: Number
    },
    thighL: {
        type: Number
    }
});

module.exports = mongoose.model("NewEntryForm", schema);
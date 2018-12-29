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
        type: String
    },
    leanMass: {
        type: String
    },
    bicepR: {
        type: String
    },
    chest: {
        type: String
    },
    waist: {
        type: String
    },
    thighR: {
        type: String
    },
    bicepL: {
        type: String
    },
    neck: {
        type: String
    },
    hips: {
        type: String
    },
    thighL: {
        type: String
    }
});

module.exports = mongoose.model("NewEntryForm", schema);
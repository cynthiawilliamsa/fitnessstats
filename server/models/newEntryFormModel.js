let mongoose = require('mongoose');
const schema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    bodyFat: {
        type: String,
        required: true
    },
    leanMass: {
        type: String,
        required: true
    },
    bicepR: {
        type: String,
        required: true
    },
    chest: {
        type: String,
        required: true
    },
    waist: {
        type: String,
        required: true
    },
    thighR: {
        type: String,
        required: true
    },
    bicepL: {
        type: String,
        required: true
    },
    neck: {
        type: String,
        required: true
    },
    hips: {
        type: String,
        required: true
    },
    thighL: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("NewEntryForm", schema);
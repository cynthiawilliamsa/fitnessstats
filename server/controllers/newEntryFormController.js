const newEntryFormModel = require('../models/newEntryFormModel');

module.exports.list = function list (req, res) {
    newEntryFormModel.find().exec().then((newEntry)=> {
        return res.json(newEntry);
    });
}

const userModel = require('../models/userModel');
function list(req, res) {
    userModel.find().exec().then((entries)=> {
        return res.json(entries);
    });
}

module.exports = {list}
  
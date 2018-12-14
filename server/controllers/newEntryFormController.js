const newEntryFormModel = require('../models/newEntryFormModel');

module.exports.list = function list (req, res) {
    newEntryFormModel.find().exec().then((newEntry)=> {
        return res.json(newEntry);
    });
}

module.exports.show =  function show(request, response) {
    newEntryFormModel.findById(request.params.id).exec()
    .then(newEntryForm => {
        response.json(newEntryForm);
    });   
   }

   module.exports.create =  function create(request, response) {
    const v = new newEntryFormModel({
        gender: request.body.gender,
        age: request.body.age,
        height: request.body.height,
        weight: request.body.weight,
        bodyFat: request.body.bodyFat,
        leanMass: request.body.leanMass,
        bicepR: request.body.bicepR,
        chest: request.body.chest,
        waist: request.body.waist,
        thighR: request.body.thighR,
        bicepL: request.body.bicepL,
        neck: request.body.neck,
        hips: request.body.hips,
        thighL: request.body.thighL
    });
    
    v.save().then(savedEntry => {
        console.log(savedEntry);
    });
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }

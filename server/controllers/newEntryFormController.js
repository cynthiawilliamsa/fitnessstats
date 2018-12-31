const newEntryFormModel = require('../models/newEntryFormModel');

module.exports.list = function list (req, res) {
    newEntryFormModel.find().exec().then((entries)=> {
        return res.json(entries);
    });
}

module.exports.show =  function show(req, res) {  
    newEntryFormModel.findById(req.params.id).exec()
    .then(lastEntry => {
        res.json(lastEntry);
    }).catch(console.log);   
   }

   module.exports.create =  function create(request, response) {
       console.log(request.body)
    const v = new newEntryFormModel({
        date: request.body.date,
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
        response.status(200).send(JSON.stringify(savedEntry))
    });
   
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }

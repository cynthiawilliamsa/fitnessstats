let express = require('express');
const router = express.Router();
let {list,show,create,update,remove} = require('../controllers/newEntryFormController');

router.get("/newentry", list);
router.get('/newentry/:id', show);
router.post('/newentry', create);
router.put('/newentry/:id', update);
router.delete('/newentry/:id', remove);

module.exports = router;


 
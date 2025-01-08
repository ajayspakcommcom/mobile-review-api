const express = require('express');
const router = express.Router();

const supportContactController = require('../../controllers/moview/supportContactController');

router.get('/supportContact', supportContactController.getAllSupportContacts);

router.get('/supportContact/:id', supportContactController.getSupportContactById);

router.post('/supportContact', supportContactController.createSupportContact);

router.put('/supportContact/:id', supportContactController.updateSupportContactById);

router.delete('/supportContact/:id', supportContactController.deleteSupportContactById);

module.exports = router;



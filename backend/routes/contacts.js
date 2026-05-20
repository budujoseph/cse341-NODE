const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
const contactValidation = require('../validations/contact-validation')

router.use('/', require('./swagger'));


router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);

router.post('/', contactValidation.contactRules(),
    contactValidation.checkContactData,
    contactsController.createContact);

router.put('/:id', contactValidation.contactRules(),
    contactValidation.checkContactData,
    contactsController.updateContact);
    
router.delete('/:id', contactsController.deleteContact);


module.exports = router;

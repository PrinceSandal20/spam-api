const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact');
const authMiddleware = require("../middleware/authmiddleware");

router.post('/', authMiddleware.authenticateUser, contactController.addContact);
router.get('/', authMiddleware.authenticateUser, contactController.getContacts);
router.delete('/:contactId', authMiddleware.authenticateUser, contactController.deleteContact);

module.exports = router;

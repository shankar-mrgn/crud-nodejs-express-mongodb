const express = require('express');
const employeeController = require('../controllers/employeeControllers');
const router = express.Router();

router.get('/', employeeController.getEmployee);

module.exports = router;

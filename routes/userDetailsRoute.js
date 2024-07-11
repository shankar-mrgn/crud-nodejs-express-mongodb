const express = require('express');
const userModel = require('../app/models/userModel');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

//To fetch or get all user details
router.get('/',userControllers.getUsers);
//To fetch individual user data
router.get('/:id',userControllers.getUsersById);
//To insert user data into db using post method
router.post('/',userControllers.addUser);
//To update a user
router.put('/:id',userControllers.updateUser);
//To remove/delete a user
router.delete('/:id',userControllers.deleteUser);

module.exports = router;
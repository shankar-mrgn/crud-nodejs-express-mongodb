const employeeModel = require('../app/models/employeeModel');
const asyncHandler = require('express-async-handler');

const getEmployee = asyncHandler(async(req,res)=>{
    try {
        const employeeList = await employeeModel.find({});
        res.status(200).json(employeeList);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = {
    getEmployee
}
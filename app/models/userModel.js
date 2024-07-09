const mongoose = require('mongoose');

const EmployeeDetails = mongoose.Schema(
    {
        
            emp_name: {
                type: String,
                required: [true, "Please enter an employee name"]
            },
            emp_gender: {
                type: String,
                required: [true, "Please enter employee gender"]
            },
            emp_dob: {
                type: String,
                required: [true, "Please enter employee date of birth."]
            }
        
    },
    {
        timestamp: true
    }
);

const Employee = mongoose.model('EmployeeDetails', EmployeeDetails);

module.exports = Employee;
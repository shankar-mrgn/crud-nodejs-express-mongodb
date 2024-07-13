const mongoose = require('mongoose');

const EmployeeDetails = mongoose.Schema(
    
        {
            id: {
                type: Number,
                
            },
            name:{
                type: String,
                required: [true, "Please enter employee name"]
            },
            email:{
                type: String,
                required: [true, "Please enter employee email"]
            },
            phone:{
                type: Number,
                required: [true, "Please enter employee phone number"]
            }
        },
        {
            timestamp: true
        }
    
);

const Employee = mongoose.model('EmployeeDetails', EmployeeDetails);

module.exports = Employee;
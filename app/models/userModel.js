const mongoose = require('mongoose');

const UserDetails = mongoose.Schema(
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

const Users = mongoose.model('UserDetails', UserDetails);

module.exports = Users;
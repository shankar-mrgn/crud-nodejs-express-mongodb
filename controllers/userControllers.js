const userModel = require('../app/models/userModel');
const asyncHandler = require('express-async-handler');

const getUsers = asyncHandler(async(req,res)=>{
    try {
        const userDetails = await userModel.find({});
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getUsersById = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findById(id);
        res.status(200).json(userDetail);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const addUser = asyncHandler(async (req,res)=>{
    try{
        const userDetails = await userModel.create(req.body);
        res.status(200).json(userDetails);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
});

const updateUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findByIdAndUpdate(id,req.body);
        if(!userDetail){
            throw new Error(error.message);
            return res.status(404).json({message:`Cannot find the user with ID ${id}`});
        }
        const updatedUserDetail = await userModel.findById(id);
        res.status(200).json(updatedUserDetail);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findByIdAndDelete(id);
        if(!userDetail){
            throw new Error(error.message);
            return res.status(404).json({message: `Cannot find any user with ID ${id}`});
        }
        const updatedUserDetails = await userModel.find({});
        res.status(200).json(updatedUserDetails);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    updateUser,
    deleteUser
}
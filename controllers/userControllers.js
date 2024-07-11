const userModel = require('../app/models/userModel');

const getUsers = async(req,res)=>{
    try {
        const userDetails = await userModel.find({});
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const getUsersById = async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findById(id);
        res.status(200).json(userDetail);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const addUser = async (req,res)=>{
    try{
        const userDetails = await userModel.create(req.body);
        res.status(200).json(userDetails);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

const updateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findByIdAndUpdate(id,req.body);
        if(!userDetail){
            return res.status(404).json({message:`Cannot find the user with ID ${id}`});
        }
        const updatedUserDetail = await userModel.findById(id);
        res.status(200).json(updatedUserDetail);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findByIdAndDelete(id);
        if(!userDetail){
            return res.status(404).json({message: `Cannot find any user with ID ${id}`});
        }
        const updatedUserDetails = await userModel.find({});
        res.status(200).json(updatedUserDetails);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    updateUser,
    deleteUser
}
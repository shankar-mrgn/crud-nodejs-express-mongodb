const express = require('express');
const dbConfig = require('./app/config/db.config');
const userModel = require('./app/models/userModel');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to Express App');
    req.send('Baseurl =>'+req.baseUrl,'req.app=>'+req.app)
});
//To fetch or get all user details
app.get('/users',async(req,res)=>{
    try {
        const userDetails = await userModel.find({});
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
//To fetch individual user data
app.get('/user/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const userDetail = await userModel.findById(id);
        res.status(200).json(userDetail);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
//To insert user data into db using post method
app.post('/user',async (req,res)=>{
    try{
        const userDetails = await userModel.create(req.body);
        res.status(200).json(userDetails);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});
//To update a user
app.put('/user/:id', async(req,res)=>{
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
});
//To remove/delete a user
app.delete('/user/:id', async(req,res)=>{
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
});

var server = app.listen(7500, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at ',host,port);
})
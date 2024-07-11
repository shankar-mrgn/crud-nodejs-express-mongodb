const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose
.set("strictQuery",false)
.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to mongodb');
}).catch((error)=>{
    console.log(error);
})
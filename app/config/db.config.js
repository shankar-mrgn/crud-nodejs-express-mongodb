const mongoose = require('mongoose');

mongoose
.set("strictQuery",false)
.connect('mongodb+srv://shanlearn22:Magi%401911@shanlearnapi.t0izkar.mongodb.net/My-API?retryWrites=true&w=majority&appName=ShanLearnAPI')
.then(()=>{
    console.log('Connected to mongodb');
}).catch((error)=>{
    console.log(error);
})
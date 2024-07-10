const mongoose = require('mongoose');

mongoose
.set("strictQuery",false)
.connect('<your mongodb url will come here>')
.then(()=>{
    console.log('Connected to mongodb');
}).catch((error)=>{
    console.log(error);
})
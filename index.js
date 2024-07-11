const express = require('express');
const dbConfig = require('./app/config/db.config');
const userDetailsRoute = require('./routes/userDetailsRoute');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Middleware
app.use(errorMiddleware);

//routes
app.use('/api/user',userDetailsRoute);

app.get('/',(req,res)=>{
    throw new Error('fake error');
    /* res.send('Welcome to Express App');
    req.send('Baseurl =>'+req.baseUrl,'req.app=>'+req.app) */
});


var server = app.listen(PORT, ()=>{
    let host = server.address().address;
    console.log('NODE API app listening at ',host,PORT);
})
const express = require('express');
const dbConfig = require('./app/config/db.config');
const userDetailsRoute = require('./routes/userDetailsRoute');
const employeeDetailsRoute = require('./routes/employeeDetailsRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 7500;
const FRONTEND = process.env.FRONTEND;

let corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 2000
}

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));


//routes
app.use('/api/user',userDetailsRoute);
app.use('/api/employee',employeeDetailsRoute);

app.get('/',(req,res)=>{
    throw new Error('fake error');
    /* res.send('Welcome to Express App');
    req.send('Baseurl =>'+req.baseUrl,'req.app=>'+req.app) */
});

//Middleware
app.use(errorMiddleware);

var server = app.listen(PORT, ()=>{
    let host = server.address().address;
    console.log('NODE API app listening at ',host,PORT);
})
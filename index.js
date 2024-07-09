const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to Express App');
    req.send('Baseurl =>'+req.baseUrl,'req.app=>'+req.app)
});

var server = app.listen(7500, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at ',host,port);
})
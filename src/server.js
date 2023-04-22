const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Init")
});



app.listen(8080, ()=>console.log('Server Up'));
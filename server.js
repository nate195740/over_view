const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/MY-OVERVEIW'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'dist/MY-OVERVEIW/index.html'));
});

app.listen(process.env.PORT || 8080);
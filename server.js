const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/my-overview'));

app.get('/*',function(req,res){
    res.send('asdsad');
    // res.sendFile(path.join(__dirname + '/dist/my-overview/index.html'))
});

app.listen(process.env.PORT || 8080);
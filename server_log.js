

//post for register page
var express = require('express');
var app = express();
var bodyparser=require('body-parser');

var urlncodedParser=bodyparser.urlencoded({extends:false});
app.post('/post_log',urlncodedParser,function(req,res){
    let response={

        Email:req.body.myemail,
        Password:req.body.pswd,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(3000,function(){
    console.log('Server Running ');
});





// get for register page 
/*
const express = require('express');
const app = express();

app.get('/get_reg', function(req,res){
    let response={

        name:req.query.name,
        email:req.query.email,
        psw:req.query.psw,
    };

    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(3000,function(){
    console.log('Server Running ');
});

*/


//post for register page
var express = require('express');
var app = express();
var bodyparser=require('body-parser');

var urlncodedParser=bodyparser.urlencoded({extends:false});
app.post('/post_reg',urlncodedParser,function(req,res){
    let response={

        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(3000,function(){
    console.log('Server Running ');
});




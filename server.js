
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
var urlncodedParser=bodyparser.urlencoded({extended:false});
app.post('/post_reg',urlncodedParser,function(req,res){
console.log(req.body);
    let response={

        name:req.body.name,
        email:req.body.email,
        psw:req.body.psw,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(3000,function(){
    console.log('Server Running ');
});




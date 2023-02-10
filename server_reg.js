
// get for register page 

const express = require('express');
const app = express();

app.get('/get_reg', function(req,res){
    let response={

        Name:req.query.Name,
        Email:req.query.Email,
        Password:req.query.Password,
    };

    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(3000,function(){
    console.log('Server Running ');
});



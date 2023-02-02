var express = require('express');
var post=process.env.PORT || 3000;

var app = express();

//api Middelwares
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


//API ROUtes
app.get('/form',(re,res)=>{
    res.sendFile(__dirname,'/public/register.html')
})

app.post('/formPost',(req,res)=>{
console.log(req.body);
})



//this is basically to listen on port
app.listen(port,()=>{
    console.log('Server started at http://localhost:${port}')

});
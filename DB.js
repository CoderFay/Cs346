var mongo=require('mongodb').MongoClient
var url='mongodb://localhost:27017/newDB';

mongo.connect(url,function(err,db){

    if(err){
        throw err;
    }
    console.log('Database created !');
    db.createCollection('persons',function(err,result){
        if(err){
            throw err;
        }
        console.log('Database created !');
        db.close();

    });
});
console.log('Database created !');



/* var express=require('express');
var app=express();
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/DB",{useNewUrlParser: true,useUnifiedTopology:true},(err)=> {
    if(!err)
      console.log('DB connected');
    else
      console.log('DB error')    
})
app.listen(3000,()=>{console.log('Connection lisyen on 3000')})
/* var mongo=require('mongodb').MongoClient;
http.createServer(function(req,res){
    mongo.connect('mongodb://0.0.0.0:27017/DB',{useUnifiedTopology: true},function(err,conn){
       if(err)
         return console.error(err);
        res.write("Connected successfully");
        res.end();
        conn.close();
    })
}).listen(3000,'localhost');
 */ 
var http=require('http');
var mongo=require('mongodb').MongoClient;
http.createServer(function(req,res){
  mongo.connect('mongodb://0.0.0.0:27017/newDB',{useUnfindTopology:true},function(err,conn){
    if(err)
      return console.error(err);
    var db=conn.db('newdb');
    db.createCollection('ueser', function(err,rs){
        res.write("Connected successfully");  
        res.end();
        conn.close();
    });  
   
  })
}).listen(3000,'localhost');
console.log("Srver running!");
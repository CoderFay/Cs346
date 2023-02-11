var http=require('http');
var mongo=require('mongodb').MongoClient;
http.createServer(function(req,res){
  mongo.connect('mongodb://0.0.0.0:27017/newDB',{useUnfindTopology:true},function(err,conn){
    if(err)
      return console.error(err);
    var db=conn.db('newdb');
    var cmp1={name:'Nouf' , email:'Nouf@gmail.com', password:'Asdf1234'};
    db.createCollection('ueser').insertOne(cmp1, function(err,rs){
        if(err)
          return console.error(err);
        res.write("One row inserted");  
        console.log(rs);
        conn.close(rs.name);
        res.end();
    });  
   
  })
}).listen(3000,'localhost');

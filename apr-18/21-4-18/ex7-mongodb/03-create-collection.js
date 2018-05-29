var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://dharundev81:yasodha1702@node1-h24mb.mongodb.net";

MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("node_sample");

    dbo.createCollection("customers", function(err, res){
        if (err) throw err;
        console.log("collection created"+ res);
        db.close(); 
    });
});
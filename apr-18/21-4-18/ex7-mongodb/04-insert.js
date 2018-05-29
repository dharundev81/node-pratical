var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://dharundev81:yasodha1702@node1-h24mb.mongodb.net";

MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("node_sample");

    var myobj = {id:'17', name:'Dharun'};

    dbo.collection("customers").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
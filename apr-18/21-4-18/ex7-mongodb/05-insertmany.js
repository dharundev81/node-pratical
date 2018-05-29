var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://dharundev81:yasodha1702@node1-h24mb.mongodb.net";

MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("node_sample");

    var myobj = [{id:'17', name:'Arun'},
    {id:'18', name:'Ram'},
    {id:'09', name:'Hari'},
    {id:'13', name:'Ganni'},];

    dbo.collection("customers").insertMany(myobj, function(err, res){
        if (err) throw err;
        console.log("No of document inserted"+res.insertedCount);
        db.close();
    });
});
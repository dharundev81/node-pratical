var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://dharundev81:yasodha1702@node1-h24mb.mongodb.net/test?retryWrites=true/node_sample";

MongoClient.connect(uri, function(err,client){

    if (err) throw err;
    // const collection = client.db("test").collection("devices");
    // console.log("connected");
    console.log("database created");
    client.close();
});
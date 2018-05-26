var mysql = require('mysql');

var con = mysql.createConnection({
    // hot: "localhost",
    // user: "root",
    // password: "",
    // database: "node_samp"

    host: "node.chgkmi3ejfxg.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "dharundev81",
    password: "yasodha1702",
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    process.exit();
    // con.query("CREATE DATABASE node_samp", function(err,result){
    //     if (err) throw err;
    //     console.log("Database created");
    // });
});
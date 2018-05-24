var mysql = require('mysql');

var con = mysql.createConnection({
    hot: "localhost",
    user: "root",
    password: "",
    // database: "node_samp"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    // con.query("CREATE DATABASE node_samp", function(err,result){
    //     if (err) throw err;
    //     console.log("Database created");
    // });
});
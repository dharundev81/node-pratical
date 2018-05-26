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
    database: "node_samp",
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE customer (cus_id INT AUTO_INCREMENT PRIMARY KEY,id VARCHAR(255),name varchar(255))";
    // var sql = "ALTER TABLE customer ADD COLUMN cus_id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function(err,result){
        if (err) throw err;
        // console.log("Table created");
        console.log("Table Changed");
        process.exit();
    })
});
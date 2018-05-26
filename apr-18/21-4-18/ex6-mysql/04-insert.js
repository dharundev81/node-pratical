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

    // var sql = "INSERT INTO customer (id, name) VALUES ('17','Dharun')";

    // con.query(sql, function(err,result){
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });

    // multiple rows

    var sql = "INSERT INTO customer (id, name) VALUES ?";
    var values = [
        ['17','Arun'],
        ['10','RAM'],
        ['03','HARI'],
    ];
    con.query(sql, [values], function(err,result){
        if (err) throw err;
        console.log(result.affectedRows+"record inserted");
        process.exit();
    });

})
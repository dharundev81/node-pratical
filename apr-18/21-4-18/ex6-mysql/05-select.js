var mysql = require('mysql');

var con = mysql.createConnection({
    host: "node.chgkmi3ejfxg.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "dharundev81",
    password: "yasodha1702",
    database: "node_samp",
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected");

    // var sql = "SELECT * FROM customer";

    // var sql = "SELECT * FROM customer WHERE name LIKE '%N' ";

    var na = "Arun";

    var sql = "SELECT * FROM customer WHERE name = "+ mysql.escape(na);

    con.query(sql, function(err, result, fields){
        if (err) throw err;
        // console.log(fields[2].name);
        console.log(result);
        process.exit();
    });
});
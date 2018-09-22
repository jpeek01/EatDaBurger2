//Setup MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"admin",
        password:"password1",
        database:"burger_db"
    });
}

connection.connect(function(err){
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId )
});

//Exporting the mySQL connection
module.exports=connection;
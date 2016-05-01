var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "login_details"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
});

con.query('SELECT * FROM user_info',function(err1,rows){
  if(err1) {throw err1;}

  console.log('Data received from Db:\n');
  console.log(rows);
});

con.end(function(err1) {
  
});




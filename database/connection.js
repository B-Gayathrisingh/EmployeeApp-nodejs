const mysql = require("mysql2");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",        //  your MySQL username
  password: "root", // your MySQL password
  database: "employeeDB"
});

connection.connect((err) => {
  if (err) {
    console.error(" Error connecting: " + err.stack);
    return;
  }
  console.log(" Connected to MySQL as ID " + connection.threadId);
});

module.exports = connection;

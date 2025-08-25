const connection = require("./database/connection");
const employeeModel = require("./models/employeeModel");

// employeeModel.addEmployee("Alice Johnson", "alice@example.com", "HR");
// employeeModel.listEmployees();
// employeeModel.updateEmployee(1, "Finance");
// employeeModel.deleteEmployee(1);

// Close connection after delay
setTimeout(() => {
  connection.end();
  console.log(" MySQL Connection Closed");
}, 2000);

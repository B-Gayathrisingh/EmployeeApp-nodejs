const connection = require("../database/connection");

// Insert
function addEmployee(name, email, department) {
  const sql = "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)";
  connection.query(sql, [name, email, department], (err, results) => {
    if (err) throw err;
    console.log("Employee Added:", results.insertId);
  });
}

// List All
function listEmployees() {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    console.log("Employees:", results);
  });
}

// Update
function updateEmployee(id, department) {
  const sql = "UPDATE employees SET department = ? WHERE id = ?";
  connection.query(sql, [department, id], (err, results) => {
    if (err) throw err;
    console.log("Employee Updated:", results.message);
  });
}

// Delete
function deleteEmployee(id) {
  const sql = "DELETE FROM employees WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) throw err;
    console.log("Employee Deleted:", results.message);
  });
}

module.exports = { addEmployee, listEmployees, updateEmployee, deleteEmployee };

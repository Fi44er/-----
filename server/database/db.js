const mysql = require("mysql2/promise")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "housing_and_communal_services",
  password: "$Fi4er_81",
  waitForConnections: true,
})

module.exports = connection

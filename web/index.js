const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM people", (err, rows) => {
	   var resultado = '<h1>Full Cycle Rocks!</h1><br>';
	   for (let row of rows) {
            resultado += row.name + ' <br>  ';
        }
		res.send(resultado);
  });
});

app.listen(5000, () => console.log("listining on port 5000"));

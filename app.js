const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 9453
})
connection.execute(
    'SELECT 1 + 1 AS solution',
    (err, result) => console.log(result[0].solution)
);
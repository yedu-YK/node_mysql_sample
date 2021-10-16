
const mysql = require('mysql2');

let connection = mysql.createPool({
    host: 'localhost',
    user: 'yedu',
    password: 'password',
    database: 'test2'
  });
  
  module.exports = connection;
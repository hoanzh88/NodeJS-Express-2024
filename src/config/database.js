const mysql = require('mysql2');
const config = require('../../config');

// console.log(config.apps[0].mysql);
const pool = mysql.createPool({
    host: config.apps[0].mysql.DB_HOST,
    user: config.apps[0].mysql.DB_USER,
    database: config.apps[0].mysql.DB_NAME,
    password: config.apps[0].mysql.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise(); // Sử dụng .promise() để hỗ trợ async/await
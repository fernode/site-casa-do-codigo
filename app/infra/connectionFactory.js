const mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'fernando',
        password: '123',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = () => {
    return createDBConnection;
}
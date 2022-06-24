const Pool = require('pg').Pool;


const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'footgeek',
    password: '',
    port: 5432
});

db.connect();


module.exports = db;


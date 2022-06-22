const mysql = require('mysql');
const connect =  mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'dtb_footgeek'
})

connect.connect();


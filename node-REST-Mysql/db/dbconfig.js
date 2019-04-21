'use strict'

const mysql = require('mysql');

const dbconst = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
};

var sqlConnection = mysql.createConnection(dbconst);

sqlConnection.connect((err) =>{
    if(!err){
        console.log("DB connection succeeded!");
    }else{
        console.log("Connection failed! \n Error: "+JSON.stringify(err, undefined, 2));
    }
});

module.exports = sqlConnection;

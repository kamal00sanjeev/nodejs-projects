'use strict'

const express = require('express');
const bodyparser = require('body-parser');

const server = require('./db/server');
const sqlConnection = require('./db/dbconfig');
const sqlQuery = require('./db/sqlQurey');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var port = server.port;

app.listen(port, () => {
    console.log("Express server is running at port: "+port);
});

app.get("/", (req, res) => {
    res.send("Perfect ! you're good to go...");
});

app.get("/persons", (req, res) => {
    sqlConnection.query(sqlQuery.allPersons, (err, rows, fields) =>{
        if(err){
            console.log(err);
        }        
        console.log(rows);
        res.send(rows);
    });
});

app.post("/addperson", (req, res) => {
    var newP = [req.body.pname, req.body.salary];
    sqlConnection.query(sqlQuery.newPerson, newP, (err, row, fields) =>{
        if(err){
            console.log(err);
        }else{            
            console.log("A USER Added");
            res.send("A new User has been added!");
        }        
    });

});


app.put("/updateperson", (req, res) => {
    var newP = [75000.0, 11];
    sqlConnection.query(sqlQuery.updatePerson, newP, (err, row, fields) =>{
        if(err){
            console.log(err);
        }else{            
            console.log("A USER updated");
            res.send("User details has been updated!");
        }        
    });

});

app.delete("/deleteperson", (req, res) => {
    var p = [6];
    sqlConnection.query(sqlQuery.deletePerson, p, (err, row, fields) =>{
        if(err){
            console.log(err);
        }else{            
            console.log("A USER deleted");
            res.send("User deleted from table!");
        }        
    });

});


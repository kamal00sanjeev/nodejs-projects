'use strict'

var sqlquery = {
    allPersons: "SELECT * FROM PERSON",
    newPerson: "INSERT INTO PERSON(PNAME, SALARY) VALUES(?, ?);",
    updatePerson: "UPDATE PERSON SET SALARY = ? WHERE PID = ?",
    deletePerson: "DELETE FROM PERSON WHERE PID = ?"
};

module.exports = sqlquery;
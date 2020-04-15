const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db.js");
var EmployeeControler = require("./controlers/employeeControler");

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server started on port 3000"));

app.use("/employee", EmployeeControler);

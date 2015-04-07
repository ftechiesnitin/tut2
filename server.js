var express = require('express'), path = require('path');
var app = express();

app.use('/', express.static(__dirname + '/www'));
app.use('/api', express.static(__dirname + '/api'));

var api = require('./api/employee.js');

app.post('/api/addEmployee', api.addEmployee);


app.listen(3000);
console.log('Listening.. on port...3000'); 
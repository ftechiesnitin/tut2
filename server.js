var express = require('express'), path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use('/', express.static(__dirname + '/www'));
app.use('/api', express.static(__dirname + '/api'));
app.use('/lib', express.static(__dirname + '/lib'));

var api = require('./api/employee.js');

app.post('/api/addEmployee', api.addEmployee);
app.get('/api/listEmployee', api.listEmployee);
app.post('/api/editEmployee', api.editEmployee);
app.post('/api/updateEmployee', api.updateEmployee);
app.post('/api/deleteEmployee', api.deleteEmployee);


app.listen(3000);
console.log('Listening.. on port...3000'); 
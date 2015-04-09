
var http = require('http');
var mysql = require('mysql');

//Database details
var connection = mysql.createPool({
  host :'apps.fountaintechies.com',
  user : 'ftdev',
  password : '10gXWOqeaf',
 database : 'company',
 });

//Loading Mysql-CRUD
var CRUD = require('mysql-crud');
var empcrud = CRUD(connection,'tbl_employee_details');

//Adding Employee
exports.addEmployee = function(req, res) {
	empcrud.create({
		'first_name': req.body.firstname,
		'last_name': req.body.lastname,
		'email': req.body.email,
		'contact_no': req.body.contactno,
		'gender': req.body.gender
	}, function(err){
		console.log(err);
	}
	);
}

//Showing list of Employee
exports.listEmployee = function(req, res) {
	var query = "select * from tbl_employee_details";
	connection.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}

//Editing the Employee Details
exports.editEmployee = function(req, res) {
	console.log(req.body.e_id);
	var query = "select * from tbl_employee_details where e_id= "+ req.body.e_id;
	connection.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}

//Updating the Employee Details
exports.updateEmployee = function(req, res) {
	console.log(req.body);
	var query = "UPDATE tbl_employee_details SET first_name = '"+ req.body.first_name +"', last_name = '"+ req.body.last_name +"', email = '"+ req.body.email +"', contact_no = '"+ req.body.contact_no +"', gender = '"+ req.body.gender +"' WHERE e_id = "+ req.body.e_id;
	connection.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}
	
//Deleting the Employee Details
exports.deleteEmployee = function(req, res) {
	console.log(req.body);
	var query = "DELETE FROM `tbl_employee_details` WHERE e_id = "+ req.body.e_id;
	connection.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}
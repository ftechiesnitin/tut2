
var http = require('http');
var mysql = require('mysql');

//Database details
var db = mysql.createPool({
	host: 'localhost',
	username: 'root',
	password: '';
	database: 'company';
});

//
var CRUD = require('mysql-crud');
var empcrud = CRUD(db,'tbl_employee_details');

//Adding Employee
export.addEmployee = function(req, res) {
	empcrud.create({
		'first_name': req.body.firstname,
		'last_name': req.body.lastname,
		'email': req.body.email,
		'contact_no': req.body.contactno,
		'gender': req.body.gender
	},
	function(err){
		console.log('Connection Error. Try again');
	}
	
	);
}
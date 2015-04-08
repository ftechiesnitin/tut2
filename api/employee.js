
var http = require('http');
var mysql = require('mysql');

//Database details
var db = mysql.createPool({
	host: 'localhost',
	username: 'root',
	password: 'toor',
	database: 'company'
});

//
var CRUD = require('mysql-crud');
var empcrud = CRUD(db,'tbl_employee_details');

//Adding Employee

exports.addEmployee = function(req, res) {
	console.log(req.body);
	/*empcrud.create({
		'first_name': req.body.firstname,
		'last_name': req.body.lastname,
		'email': req.body.email,
		'contact_no': req.body.contactno,
		'gender': req.body.gender
	},
	function(err){
		console.log('Connection Error. Try again');
	}
	
	);*/
}
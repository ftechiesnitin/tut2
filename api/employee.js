
var http = require('http');
var mysql = require('mysql');

//Database details
var db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'company'
});

//
var CRUD = require('mysql-crud');
var empcrud = CRUD(db,'tbl_employee_details');

//Adding Employee
exports.addEmployee = function(req, res) {
	empcrud.create({
		'first_name': req.body.firstname,
		'last_name': req.body.lastname,
		'email': req.body.email,
		'contact_no': req.body.contactno,
		'gender': req.body.gender
	},
	function(err){
		console.log(err);
	}
	
	);
}

//Showing list of Employee
exports.listEmployee = function(req, res) {
	var query = "select * from tbl_employee_details";
	db.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}

//Editing the Employee Details
exports.editEmployee = function(req, res) {
	var query = "select * from tbl_employee_details where e_id=";
	db.query(query, function(err, rows){
		console.log(rows);
		res.jsonp(rows);
	});
}
var app = angular.module("myApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	}).
	when('/addEmployee', {
		templateUrl: 'templates/addEmployee.html',
		controller: 'addEmployeeController'
	}).
	when('/employeeList', {
		templateUrl: 'templates/employeeList.html',
		controller: 'employeeListController'
	}).
	when('/viewEmployee', {
		templateUrl: 'templates/viewEmployee.html',
		controller: 'viewEmployeeController'
	}).
	when('/deleteEmployee', {
		templateUrl: 'templates/deleteEmployee.html',
		controller: 'deleteEmployeeController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

app.controller('homeController', function($scope, $http){
	$scope.addEmployee = function(){
		$http.post("localhost:3000/api/addEmployee", employee).
		success(funtion(req, res) {
			
		}).
		error(function() {
			console.log('Error Occurred');
		});
	}
});





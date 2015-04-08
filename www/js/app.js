var app = angular.module("myApp",['ui.router','ngAnimate','uiRouterSample.contacts','uiRouterSample.contacts.service','uiRouterSample.utils.service']);
/* app.service('updateData', function() {
	this.data;
}); */

app.config(function($stateProvider, $urlRouterProvider) {
	
	urlRouterProvider.otherwise('/');
	
	$stateProvider.
	state('home', {
		url: '/',
		controller: 'homeController',
		templateUrl: 'templates/home.html'
	}).
	state('employeeList', {
		url: '/employeeList',
		controller: 'employeeListController',
		templateUrl: 'templates/employeeList.html'
	}).
	state('editEmployee', {
		url: '/editEmployee',
		controller: 'editEmployeeController',
		templateUrl: 'templates/editEmployee.html'
	}).
	state('deleteEmployee', {
		url: '/deleteEmployee',
		controller: 'deleteEmployeeController',
		templateUrl: 'templates/deleteEmployee.html'
	});
});

app.controller('homeController', function($scope, $http){

	console.log("this is homeController");
	$scope.addEmployee = function(data){
		console.log(data);
		$http.post("localhost:3000/api/addEmployee",data).success(function(res, req) {
			}).error(function() {
            	console.log("Data connection is failed");
        	});

		
	$scope.addEmployee = function(employee){
		console.log(employee);
		  $http.post("http://localhost:3000/api/addEmployee",employee).success(function(res, req) {
   }).error(function() {
             console.log("Data connection is failed");
         });
		/* $http.post("http://localhost:3000/api/addEmployee", employee).success(function(req, res) {
			console.log('Success');
		}).error(function() {
			console.log('Error Occurred');
		}); */
	}
});

app.controller('employeeListController', function($scope, $http, $state, updateData){
		$http.get("http://localhost:3000/api/listEmployee").
		success(function(req, res) {
			$scope.data = req; 
			console.log(req);
		}).error(function() {
			console.log('Error Occurred');
		});
		
		/* $scope.editData = function(employee){
			console.log(employee);
			updateData.data = employee;
			$state.go("editEmployee");
		} */
	
});

/* app.controller('editEmployeeController', function($scope, $http, updateData){
	$scope.employee = updateData.data;
	console.log($scope);
}); */





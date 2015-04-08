var app = angular.module("myApp",['ui.router','ngAnimate']);

  app.service('updateData', function() {
	this.data;
});  

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	})
	.state('employeeList', {
		url: '/employeeList',
		controller: 'employeeListController',
		templateUrl: 'templates/employeeList.html'
	})
	.state('editEmployee', {
		url: '/editEmployee',
		controller: 'editEmployeeController',
		templateUrl: 'templates/editEmployee.html'
	});
}]);

 app.controller('homeController', function($scope, $http){
	console.log("this is homeController");
	$scope.addEmployee = function(employee){
		console.log(employee);
		$http.post("http://localhost:3000/api/addEmployee",employee).success(function(res, req) {
				console.log('Success!!!!!!!');
			}).error(function() {
            	console.log(err);
        	});

	}
});
 
app.controller('employeeListController', function($scope, $http, $state, updateData){
		$http.get("http://localhost:3000/api/listEmployee").success(function(req, res) {
			$scope.data = req; 
			console.log(req);
		}).error(function() {
			console.log('Error Occurred');
		});
		
		 $scope.editData = function(employee){
			console.log(employee);
			updateData.data = employee;
			$state.go("editEmployee");
		}
		
		$scope.deleteDetail = function(employees){
			console.log(employees);
			$scope.empl = employees;
			//$scope.emp = updateData.data;
			console.log($scope.empl);
			$http.post("http://localhost:3000/api/deleteEmployee", $scope.empl).success(function(res, req) {
				//$scope.emp = res[0];
			console.log ($scope.empl);
			}).error(function() {
				console.log("Data connection is failed");
			});
			$state.go("employeeList");
		}
	
});

app.controller('editEmployeeController', function($scope, $http, updateData, $state){
	$scope.employee = updateData.data;
	console.log($scope.employee);
    $http.post("http://localhost:3000/api/editEmployee", $scope.employee).success(function(res, req) {
        $scope.employees = res[0];
		console.log ($scope.employees);
    }).error(function() {
        console.log("Data connection is failed");
    });
	
	$scope.updateDetail = function(employees){
			console.log(employees);
			$scope.emp = employees;
			//$scope.emp = updateData.data;
			console.log($scope.emp);
			$http.post("http://localhost:3000/api/updateEmployee", $scope.emp).success(function(res, req) {
				//$scope.emp = res[0];
				console.log ($scope.emp);
			}).error(function() {
				console.log("Data connection is failed");
			});
			$state.reload();
		}
}); 

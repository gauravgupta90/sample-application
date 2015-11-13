'use strict';

angular.module('myAppApp')
  .controller('ListStudentCtrl', function ($scope, $http) {
    $scope.students = {};
    $http.get('/api/students')	    
	.success(function(res){
        $scope.students = res;
        console.log($scope.students);         
    }).error(function(err){
      	alert("Unable to get student list");
    })

    $scope.viewDetail = function(studentId){

    	var url = "http://localhost:9000/viewStudent/"+studentId;
    	console.log(url);
    	window.open(url, '_blank'); // in new tab
    }

    $scope.edit = function(studentId){
    	var url = "http://localhost:9000/editStudent/"+studentId;
    	console.log(url);
     	window.open(url, '_blank'); // in new tab
    }
  });

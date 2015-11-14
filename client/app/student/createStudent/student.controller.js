'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http, $location) {
  	$scope.student = {};

    $scope.init = function(){
        $http.get('/api/subjects')      
        .success(function(res){
            $scope.student.marks=res;
        }).error(function(err){
            alert("Unable to get subject list");
        })
    }

    $scope.create = function(){
        $http.post('/api/students', $scope.student)	    
	    .success(function(res){
            alert("Student successfully created");
            $scope.student = {};
            window.location="http://localhost:9000/listStudent";      
        }).error(function(err){
        	alert("Please check the data you have entered");
        })        
    }

    $scope.listStudent = function(){
      $location.path('/listStudent');
    }

    $scope.init();
});
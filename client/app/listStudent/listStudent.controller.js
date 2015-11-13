'use strict';

angular.module('myAppApp')
  .controller('ListStudentCtrl', function ($scope, $http) {
    $scope.student = {};
    $http.get('/api/students')	    
	.success(function(res){
        $scope.student = res;
        console.log($scope.student);         
    }).error(function(err){
      	alert("Unable to get student list");
    })
  });

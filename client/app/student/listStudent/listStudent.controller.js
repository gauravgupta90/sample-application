'use strict';

angular.module('myAppApp')
  .controller('ListStudentCtrl', function ($scope, $http, $location) {
    $scope.students = {};
    $http.get('/api/students')	    
	   .success(function(res){
        $scope.students = res;
    }).error(function(err){
      	alert("Unable to get student list");
    })

    $scope.viewDetail = function(studentId){
    	$location.path('/viewStudent/'+studentId);
    }

    $scope.delete = function(studentId){
    	$http.delete('/api/students/'+studentId)     
      .success(function(res){
          $http.get('/api/students')     
          .success(function(res){
              $scope.students = res;
          }).error(function(err){
              alert("Unable to get student list");
          })
      }).error(function(err){
          alert("Unable to delete");
      })
    }

    $scope.addStudent = function(){
      $location.path('/student');
    }
  });

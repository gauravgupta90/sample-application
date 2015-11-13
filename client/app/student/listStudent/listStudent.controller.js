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

    	var url = "http://localhost:9000/viewStudent/"+studentId;
    	window.open(url, '_blank'); // in new tab
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

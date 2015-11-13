'use strict';

angular.module('myAppApp')
  .controller('ViewStudentCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.shouldReadOnly = true;
    $scope.student = {};
    var param = $routeParams.id

    
    $scope.init = function(){
        $http.get('/api/students/'+param)       
        .success(function(res){
            $scope.student = res;    
        }).error(function(err){
            alert("Unable to get student detail");
        })
    }

    $scope.edit = function(){
    	$scope.shouldReadOnly = false;
    }

    

    $scope.update = function(){
    	$http.put('/api/students/'+param, $scope.student)	    
		.success(function(res){
			$scope.init();	        
	    }).error(function(err){
	      	alert("Unable to update");
	    })
    }

    $scope.listStudent = function(){
      $location.path('/listStudent');
    }

    $scope.init();
  });

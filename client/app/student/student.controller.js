'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http) {
    $scope.create = function(){
        $http.post('/api/students', $scope.student)	    
	    .success(function(res){
            alert("Student successfully created");  
            $scope.student = '';          
        }).error(function(err){
        	alert("Please check the data you have entered");
        })
        
    }
});
'use strict';

angular.module('myAppApp')
  .controller('SubjectCtrl', function ($scope, $http) {
    $scope.subjects = {};
    $scope.subject = {};
    $scope.shouldShowCreateSubject = false;

    function toggleView(){
    	$scope.shouldShowCreateSubject = !$scope.shouldShowCreateSubject;
    }
    
    $scope.init = function(){
        $http.get('/api/subjects')      
        .success(function(res){
            $scope.subjects = res;
        }).error(function(err){
            alert("Unable to get subject list");
        })
    }

    $scope.toggleView =  function(){
    	toggleView();
    }

    $scope.saveSubject = function(){
        $http.post('/api/subjects', $scope.subject)	    
	    .success(function(res){
            alert("Subject successfully created");
            $scope.student = {};
            toggleView();
            $scope.init();
            
        }).error(function(err){
        	alert("Please check the data you have entered");
        })        
    }

    $scope.init();
  });

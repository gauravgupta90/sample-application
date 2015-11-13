'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http, $location) {
  	$scope.student = {};

    function addMarks(obj) {
        if(!$scope.student.marks)
            $scope.student.marks = [];
        var marks = {
            subjectName : obj.name,
            subjectCode : obj.code,
            subjectMarks : ''
        }
        $scope.student.marks.push(marks);
    };

    $scope.init = function(){
        $http.get('/api/subjects')      
        .success(function(res){
            for(var i in res){
                addMarks(res[i]);
            }
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
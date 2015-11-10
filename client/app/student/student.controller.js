'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http) {
  	$scope.student = {}; 
    $scope.create = function(){
        $http.post('/api/students', $scope.student)	    
	    .success(function(res){
            alert("Student successfully created");  
            $scope.student = {};          
        }).error(function(err){
        	alert("Please check the data you have entered");
        })        
    }

    $scope.addMarks = function () {
    	if(!$scope.student.marks)
    		$scope.student.marks = [];
    	var marks = {
    		subjectName : '',
    		subjectMarks : ''
    	}
    	var length = $scope.student.marks.length;
    	if(length){
    		if($scope.student.marks[length-1].subjectName =='' || !$scope.student.marks[length-1].subjectName){
	    		alert("please fill the marks first");
	    	}
	    	else
	        	$scope.student.marks.push(marks);
	    }
  		else
  			$scope.student.marks.push(marks);
    };
});
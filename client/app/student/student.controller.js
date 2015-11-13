'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http) {
  	$scope.student = {}; 
    $scope.create = function(){
        $http.post('/api/students', $scope.student)	    
	    .success(function(res){
            alert("Student successfully created");
            console.log($scope.student);
            $scope.student = {};
            window.location="http://localhost:9000/listStudent";      
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
    		if($scope.student.marks[length-1].subjectName =='' || !$scope.student.marks[length-1].subjectName || $scope.student.marks[length-1].subjectMarks =='' || !$scope.student.marks[length-1].subjectMarks){
	    		alert("please fill the marks first");
	    	}
	    	else
	        	$scope.student.marks.push(marks);
	    }
  		else
  			$scope.student.marks.push(marks);
    };
});
'use strict';

angular.module('myAppApp')
  .controller('ViewStudentCtrl', function ($scope, $http, $routeParams) {
    $scope.shouldReadOnly = true;
    $scope.student = {};
    var param = $routeParams.id
    $http.get('/api/students/'+param)	    
	   .success(function(res){
        $scope.student = res;    
    }).error(function(err){
      	alert("Unable to get student detail");
    })

    $scope.edit = function(){
    	$scope.shouldReadOnly = false;
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

    $scope.update = function(){
    	$http.put('/api/students/'+param, $scope.student)	    
		.success(function(res){
			$http.get('/api/students/'+param)	    
			.success(function(res){
		        alert("Updated Successfully"); 
		        $scope.student = res;
		        $scope.shouldReadOnly = true;   
		    }).error(function(err){
		      	alert("Unable to get student detail");
		    })	        
	    }).error(function(err){
	      	alert("Unable to update");
	    })
    }
  });

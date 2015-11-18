'use strict';

angular.module('myAppApp')
  .controller('ListStudentAvgCtrl', function ($scope, $http) {
    $scope.students = {};
    $scope.studentAvg = {};

    $scope.init = function(){
        $http.get('/api/students/studentMarksAverage')      
         .success(function(res){
            $scope.students = res;
        }).error(function(err){
            alert("Unable to get student list");
        });

        $http.get('/api/students/totalStudentMarksAverage')      
         .success(function(res){
            $scope.studentAvg = res[0];
        }).error(function(err){
            alert("Unable to get student list");
        });
    }

    $scope.calculateAverage = function(total, scored){ 
      return Math.round((scored/total)*100);
    };

    $scope.init();
  });

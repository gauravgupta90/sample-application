'use strict';

angular.module('myAppApp')
  .controller('StudentCtrl', function ($scope, $http, $location) {
  	$scope.student = {};
    $scope.onlyNumbers = '/^\d+$/';

    $scope.init = function(){
        $http.get('/api/subjects')      
        .success(function(res){
            $scope.student.marks=res;
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
        }).error(function(err, status){

            if(status == 409)
                alert("Email or phone number already registered");
        	else
                alert("Please check the data you have entered");
        })        
    }

    $scope.listStudent = function(){
      $location.path('/listStudent');
    }

    $scope.init();
})
.directive("numbersOnly", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
               if (inputValue == undefined) return '' 
               var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
               if (transformedInput!=inputValue) {
                  modelCtrl.$setViewValue(transformedInput);
                  modelCtrl.$render();
               }         

               return transformedInput;         
            });
        }
    };
})


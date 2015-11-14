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

    $scope.delete = function(subjectId){
        $http.delete('/api/subjects/'+subjectId)     
      .success(function(res){
          alert("successfully Deleted");
           $scope.init();
      }).error(function(err){
          alert("Unable to delete");
      })
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
});

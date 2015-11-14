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
            alert("Updated Successfully");
            $location.path('/listStudent');        
	    }).error(function(err, status){
            if(status == 409)
                alert("Email or phone number already registered");
            else
                alert("Unable to update");
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
.directive("lowerThan", function () {
    return {
        require: "ngModel",
        link: function ($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {
                var comparisonModel = $attrs.lowerThan;
                
                if(!viewValue || !comparisonModel){
                  // It's valid because we have nothing to compare against
                  ctrl.$setValidity('lowerThan', true);
                }

                // It's valid if model is lower than the model we're comparing against
                ctrl.$setValidity('lowerThan', parseInt(viewValue, 10) <= parseInt(comparisonModel, 10) );
                return viewValue;
            };
            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('lowerThan', function(comparisonModel){
                return validate(ctrl.$viewValue);
            });
        }
    };
});

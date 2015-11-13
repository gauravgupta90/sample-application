'use strict';

angular.module('myAppApp')
  .controller('ViewStudentCtrl', function ($scope, $routeParams) {
    $scope.message = 'Hello';
  
    var param = $routeParams.id
  	console.log(param);
  });

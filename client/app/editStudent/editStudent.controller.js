'use strict';

angular.module('myAppApp')
  .controller('EditStudentCtrl', function ($scope, $routeParams) {
    $scope.message = 'Hello';

    var param = $routeParams.id
  	console.log(param);
  });

'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewStudent/:id', {
        templateUrl: 'app/viewStudent/viewStudent.html',
        controller: 'ViewStudentCtrl'
      });
  });

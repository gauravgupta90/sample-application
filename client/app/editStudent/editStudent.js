'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editStudent/:id', {
        templateUrl: 'app/editStudent/editStudent.html',
        controller: 'EditStudentCtrl'
      });
  });

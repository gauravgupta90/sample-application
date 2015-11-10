'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/student', {
        templateUrl: 'app/student/student.html',
        controller: 'StudentCtrl'
      });
  });

'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/listStudent', {
        templateUrl: 'app/listStudent/listStudent.html',
        controller: 'ListStudentCtrl'
      });
  });

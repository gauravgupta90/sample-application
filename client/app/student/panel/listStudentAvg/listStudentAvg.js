'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/listStudentAvg', {
        templateUrl: 'app/student/panel/listStudentAvg/listStudentAvg.html',
        controller: 'ListStudentAvgCtrl'
      });
  });

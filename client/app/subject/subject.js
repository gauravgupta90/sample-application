'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/subject', {
        templateUrl: 'app/subject/subject.html',
        controller: 'SubjectCtrl'
      });
  });

'use strict';

angular.module('myAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/student', {
        templateUrl: 'app/student/createStudent/student.html',
        controller: 'StudentCtrl'
      })
      .when('/listStudent', {
        templateUrl: 'app/student/listStudent/listStudent.html',
        controller: 'ListStudentCtrl'
      })
      .when('/viewStudent/:id', {
        templateUrl: 'app/student/viewStudent/viewStudent.html',
        controller: 'ViewStudentCtrl'
      });
  });

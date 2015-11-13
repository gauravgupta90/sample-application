'use strict';

angular.module('myAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Create Student',
      'link': '/student'
    },
    {
      'title': 'List Student',
      'link': '/listStudent'
    },
    {
      'title': 'Subject Masterlist',
      'link': '/subject'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

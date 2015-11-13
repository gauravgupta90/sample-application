'use strict';

describe('Controller: ViewStudentCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var ViewStudentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewStudentCtrl = $controller('ViewStudentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

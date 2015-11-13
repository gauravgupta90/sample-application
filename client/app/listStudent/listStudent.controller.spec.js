'use strict';

describe('Controller: ListStudentCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var ListStudentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListStudentCtrl = $controller('ListStudentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

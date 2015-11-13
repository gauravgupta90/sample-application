'use strict';

describe('Controller: EditStudentCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var EditStudentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditStudentCtrl = $controller('EditStudentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

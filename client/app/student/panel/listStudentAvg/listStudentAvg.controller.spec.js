'use strict';

describe('Controller: ListStudentAvgCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var ListStudentAvgCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListStudentAvgCtrl = $controller('ListStudentAvgCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

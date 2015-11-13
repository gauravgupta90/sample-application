'use strict';

describe('Controller: SubjectCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var SubjectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubjectCtrl = $controller('SubjectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

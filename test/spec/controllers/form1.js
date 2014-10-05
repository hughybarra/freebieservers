'use strict';

describe('Controller: Form1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularFreeApp'));

  var Form1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Form1Ctrl = $controller('Form1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

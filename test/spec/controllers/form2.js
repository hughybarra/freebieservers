'use strict';

describe('Controller: Form2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularFreeApp'));

  var Form2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Form2Ctrl = $controller('Form2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

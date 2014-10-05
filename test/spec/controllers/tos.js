'use strict';

describe('Controller: TosCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFreeApp'));

  var TosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TosCtrl = $controller('TosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

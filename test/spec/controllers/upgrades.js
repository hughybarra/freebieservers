'use strict';

describe('Controller: UpgradesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFreeApp'));

  var UpgradesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpgradesCtrl = $controller('UpgradesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

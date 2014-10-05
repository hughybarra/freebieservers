'use strict';

describe('Service: myAjax', function () {

  // load the service's module
  beforeEach(module('angularFreeApp'));

  // instantiate service
  var myAjax;
  beforeEach(inject(function (_myAjax_) {
    myAjax = _myAjax_;
  }));

  it('should do something', function () {
    expect(!!myAjax).toBe(true);
  });

});

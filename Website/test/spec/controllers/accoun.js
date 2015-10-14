'use strict';

describe('Controller: AccounCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var AccounCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AccounCtrl = $controller('AccounCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccounCtrl.awesomeThings.length).toBe(3);
  });
});

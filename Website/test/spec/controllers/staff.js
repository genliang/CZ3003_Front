'use strict';

describe('Controller: StaffCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var StaffCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    StaffCtrl = $controller('StaffCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StaffCtrl.awesomeThings.length).toBe(3);
  });
});

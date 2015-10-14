'use strict';

describe('Controller: AccountCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var AccountCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AccountCtrl = $controller('AccountCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccountCtrl.awesomeThings.length).toBe(3);
  });
});

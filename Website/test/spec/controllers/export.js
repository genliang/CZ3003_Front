'use strict';

describe('Controller: ExportCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var ExportCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ExportCtrl = $controller('ExportCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExportCtrl.awesomeThings.length).toBe(3);
  });
});

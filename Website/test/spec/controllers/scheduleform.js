'use strict';

describe('Controller: ScheduleformCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var ScheduleformCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ScheduleformCtrl = $controller('ScheduleformCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScheduleformCtrl.awesomeThings.length).toBe(3);
  });
});

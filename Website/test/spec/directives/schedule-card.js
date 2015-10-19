'use strict';

describe('Directive: scheduleCard', function () {

  // load the directive's module
  beforeEach(module('websiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<schedule-card></schedule-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scheduleCard directive');
  }));
});

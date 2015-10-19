'use strict';

describe('Service: ScheduleExpt', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var ScheduleExpt;
  beforeEach(inject(function (_ScheduleExpt_) {
    ScheduleExpt = _ScheduleExpt_;
  }));

  it('should do something', function () {
    expect(!!ScheduleExpt).toBe(true);
  });

});

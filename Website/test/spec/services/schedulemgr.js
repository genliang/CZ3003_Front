'use strict';

describe('Service: ScheduleMgr', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var ScheduleMgr;
  beforeEach(inject(function (_ScheduleMgr_) {
    ScheduleMgr = _ScheduleMgr_;
  }));

  it('should do something', function () {
    expect(!!ScheduleMgr).toBe(true);
  });

});

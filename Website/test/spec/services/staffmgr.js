'use strict';

describe('Service: StaffMgr', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var StaffMgr;
  beforeEach(inject(function (_StaffMgr_) {
    StaffMgr = _StaffMgr_;
  }));

  it('should do something', function () {
    expect(!!StaffMgr).toBe(true);
  });

});

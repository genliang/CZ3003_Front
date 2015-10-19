'use strict';

describe('Service: AcctMgr', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var AcctMgr;
  beforeEach(inject(function (_AcctMgr_) {
    AcctMgr = _AcctMgr_;
  }));

  it('should do something', function () {
    expect(!!AcctMgr).toBe(true);
  });

});

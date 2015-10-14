'use strict';

describe('Service: DataMgr', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var DataMgr;
  beforeEach(inject(function (_DataMgr_) {
    DataMgr = _DataMgr_;
  }));

  it('should do something', function () {
    expect(!!DataMgr).toBe(true);
  });

});

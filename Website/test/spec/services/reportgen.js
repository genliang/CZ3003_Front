'use strict';

describe('Service: ReportGen', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var ReportGen;
  beforeEach(inject(function (_ReportGen_) {
    ReportGen = _ReportGen_;
  }));

  it('should do something', function () {
    expect(!!ReportGen).toBe(true);
  });

});

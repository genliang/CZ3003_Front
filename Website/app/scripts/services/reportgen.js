'use strict';

/**
 * @ngdoc service
 * @name websiteApp.ReportGen
 * @description
 * # ReportGen
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('ReportGen', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

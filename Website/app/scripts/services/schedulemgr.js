'use strict';

/**
 * @ngdoc service
 * @name websiteApp.ScheduleMgr
 * @description
 * # ScheduleMgr
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('ScheduleMgr', function () {
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

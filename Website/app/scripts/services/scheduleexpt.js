'use strict';

/**
 * @ngdoc service
 * @name websiteApp.ScheduleExpt
 * @description
 * # ScheduleExpt
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('ScheduleExpt', function () {
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

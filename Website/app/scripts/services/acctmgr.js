'use strict';

/**
 * @ngdoc service
 * @name websiteApp.AcctMgr
 * @description
 * # AcctMgr
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('AcctMgr', function () {
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

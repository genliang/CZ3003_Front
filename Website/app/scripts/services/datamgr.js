'use strict';

/**
 * @ngdoc service
 * @name websiteApp.DataMgr
 * @description
 * # DataMgr
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('DataMgr', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      uploadEmployee: function () {
        console.log("Employee Saved");
        return null;
      }
    };
  });

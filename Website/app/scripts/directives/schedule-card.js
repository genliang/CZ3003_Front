'use strict';

/**
 * @ngdoc directive
 * @name websiteApp.directive:scheduleCard
 * @description
 * # scheduleCard
 */
angular.module('websiteApp')
  .directive('scheduleCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the scheduleCard directive');
      }
    };
  });

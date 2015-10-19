'use strict';

/**
 * @ngdoc directive
 * @name websiteApp.directive:schedule
 * @description
 * # schedule
 */
angular.module('websiteApp')
  .directive('schedule', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the schedule directive');
      }
    };
  });

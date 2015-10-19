'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('ScheduleCtrl', function ($scope,$uibModal) {
  	$scope.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'schedulemodal.html',
      controller: 'ScheduleformCtrl',
      resolve: {
        items: function () {
          return ;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
    $scope.tabs = [
    { title:'Schedude 1', content:'Dynamic content 1'},
    { title:'Schedude 2', content:'Dynamic content 2'}
  ];
  });

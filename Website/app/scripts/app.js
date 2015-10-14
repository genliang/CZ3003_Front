'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
	  function($routeProvider, $locationProvider) {
	    $routeProvider
	      .when('/', {
			  templateUrl: 'views/main.html',
			  controller: 'MainCtrl',
			  controllerAs: 'main'
			})
		  .when('/schedule', {
			  templateUrl: 'views/schedule.html',
			  controller: 'ScheduleCtrl',
			  controllerAs: 'schedule'
			})
		  .when('/export', {
			  templateUrl: 'views/export.html',
			  controller: 'ExportCtrl',
			  controllerAs: 'export'
			})
		  .when('/staff', {
			  templateUrl: 'views/staff.html',
			  controller: 'StaffCtrl',
			  controllerAs: 'staff'
			})
		  .when('/account', {
			  templateUrl: 'views/account.html',
			  controller: 'AccountCtrl',
			  controllerAs: 'account'
			});
	}]);
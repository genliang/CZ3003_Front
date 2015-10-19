'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:StaffCtrl
 * @description
 * # StaffCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('StaffCtrl', function ($scope,StaffMgr) {
    /*$http.get('/views/employees.json').success(function(data){
    $scope.employees = data;
    });*/

  $scope.employeeDetails = StaffMgr.getEmployeeList();

    $scope.AddEmployee = function(name,contact,email){
      var parameters = StaffMgr.createEmployee(name,contact,email);
      $scope.employeeDetails.push(parameters);
    };
    $scope.RemoveEmployee = function(object){
      delete $scope.employeeDetails.splice(0,1);
    };
  });

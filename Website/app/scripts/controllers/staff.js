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
  
    $scope.AddEmployee = function(name, contact, email){
      //$scope.employeeDetails = StaffMgr.getEmployeeList();
      var parameters = StaffMgr.createEmployee(name, contact, email);
      console.log(parameters);
      $scope.employeeDetails.push(parameters);
    };


    $scope.EditEmployee = function(name){
      console.log(name);
      StaffMgr.editEmployee(name);
    };

    $scope.EditTrue = function(index){
      //console.log(index);
      return StaffMgr.getEdit(index);

    };
    $scope.RemoveEmployee = function(name){
      StaffMgr.removeEmployee(name);
    };

    $scope.SaveEmployee = function(name, tel, email){
      //$scope.iseditable = false;
      StaffMgr.saveEmployee(name, tel, email);
    };
  });


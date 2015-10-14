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

  $scope.employeeDetails = [{
    "Name":"JJ Lin",
    "Handphone":"90018001",
    "Email":"jjlin@gmail.com"

  },
  {
    "Name":"ABC Towkay",
    "Handphone":"88888888",
    "Email":"towkay@gmail.com"

  }];
    $scope.AddEmployee = function(){
      var parameters = StaffMgr.createEmployee("name","number","email");
      console.log(parameters);
      $scope.employeeDetails.push(parameters);
    };
  });

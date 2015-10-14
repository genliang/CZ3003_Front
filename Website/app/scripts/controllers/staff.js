'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:StaffCtrl
 * @description
 * # StaffCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('StaffCtrl', function () {
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
      var parameters = {"Name": "GG", "Handphone": "90038003", "Email": "gg@gmail.com"};
      $scope.employeeDetails.push(parameters);
    };
  });

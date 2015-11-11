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
    $scope.teams = StaffMgr.getTeams();
    $scope.teamsWithDefault = StaffMgr.getTeamsWithDefault();
    $scope.teamName = {
      team: ''
    };
    $scope.genders = ["Male", "Female"];

    $scope.employeeInput = {
      name: '',
      tel: '',
      email: '',
      selectGender: 'Male',
      selectTeam: 'No team',
      password: ''
    };

    $scope.sortType = 'Team';
    $scope.sortReverse = false;

    var copy = $scope.employeeInput;
    $scope.AddEmployee = function(){
      //$scope.employeeDetails = StaffMgr.getEmployeeList();
      console.log($scope.employeeInput);
      var parameters = StaffMgr.createEmployee(
        copy.name, 
        copy.tel, 
        copy.email, 
        copy.selectGender,
        copy.selectTeam, 
        copy.password);
      
      console.log(parameters);
      $scope.employeeDetails.push(parameters);
      $scope.employeeInput.name = '';
      $scope.employeeInput.tel = '';
      $scope.employeeInput.email = '';
      $scope.employeeInput.selectGender = 'Male';
      $scope.employeeInput.selectTeam ='No team';
      $scope.employeeInput.password = ''; 
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

    $scope.AddTeam = function (name) {
      StaffMgr.addTeam(name);
      $scope.teamName.team = '';
      
    };

    $scope.RemoveTeam = function(name){
      StaffMgr.removeTeam(name);
    };



  });


'use strict';

/**
 * @ngdoc service
 * @name websiteApp.StaffMgr
 * @description
 * # StaffMgr
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('StaffMgr', function (DataMgr) {
    // Service logic
    var employeeDetails = [{
    "Name":"JJ Lin",
    "Handphone":"90018001",
    "Email":"jjlin@gmail.com",
    "Gender":"Male",
    "Team": "Team A",
    "Password": "123456",
    "Edit":false

  },
  {
    "Name":"ABC Towkay",
    "Handphone":"88888888",
    "Email":"towkay@gmail.com",
    "Gender":"Male",
    "Team": "Team B",
    "Password": "password",
    "Edit":false

  }];
    var teams = ["Team A", "Morning Shift"];
    //var teamswithDefault = teams;
    var teamswithDefault = teams.slice();
    teamswithDefault.push("No team");

    var editIndex = [];

    var Edit = function(index){
      this.index = index;
      this.editTrue = true;
    };

    var Employee = function(name, contact, email, gender, team, password){
      this.Name = name;
      this.Handphone = contact;
      this.Email = email;
      this.Gender = gender;
      this.Team = team;
      this.Password = password;
      this.Edit = false;
      console.log(gender);
      //DataMgr.addEmployee(name,contact,email);
    };
    Employee.prototype.editName = function(new_name) {
      this.Name = new_name;
    };
    Employee.prototype.remove = function() {
      DataMgr.removeEmployee(123);
    };
    
    Employee.prototype.save = function() {
      DataMgr.uploadEmployee();
    };
    // Public API here
    return {
      createEmployee: function (name, contact, email, gender, team, password) {
        return new Employee(name, contact, email, gender, team, password);
      },
      getEmployeeList: function(){
        return employeeDetails;
        //return new Employee(name,contact,email); 
      },
      editEmployee: function(name) {
        for(var i = 0; i < employeeDetails.length; i++){
          if(employeeDetails[i].Name === name){
            employeeDetails[i].Edit = true;
            return true;
          }
        }
      },
      getEdit: function(index){
        return employeeDetails[index].Edit;
      },

      saveEmployee: function(name, tel, email){
        //changing of the employee details would happen here.
        for(var i = 0; i < employeeDetails.length; i++){
          if(employeeDetails[i].Name === name){
            employeeDetails[i].Handphone = tel;
            employeeDetails[i].Email = email;
            employeeDetails[i].Edit = false;
            console.log(employeeDetails[i].Edit);
          }
        }
      },

      removeEmployee: function(name){
        for(var i = 0; i < employeeDetails.length; i++){
          if(employeeDetails[i].Name === name){
            employeeDetails.splice(i,1);
          }
        }
      },
      getTeams: function (){
        return teams;
      },
      getTeamsWithDefault: function(){
        return teamswithDefault;
      },
      addTeam: function (name) {
        teams.push(name);
        teamswithDefault.push(name);
      },

      removeTeam: function (name) {
        var index = teams.indexOf(name);
        var index2 = teamswithDefault.indexOf(name);
        teams.splice(index, 1);
        teamswithDefault.splice(index2, 1);
      }

    };
  });


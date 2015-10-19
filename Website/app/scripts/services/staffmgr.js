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
    "Email":"jjlin@gmail.com"

  },
  {
    "Name":"ABC Towkay",
    "Handphone":"88888888",
    "Email":"towkay@gmail.com"

  }];
    var Employee = function(name, contact, email){
      this.Name = name;
      this.Handphone = contact;
      this.Email = email;
      DataMgr.addEmployee(name,contact,email);
    }
    Employee.prototype.editName = function(new_name) {
      this.Name = new_name;
    };
    Employee.prototype.remove = function() {
      DataMgr.removeEmployee(123);
    };
    // Public API here
    return {
      createEmployee: function (name,contact,email) {
        return new Employee(name,contact,email);
      },
      getEmployeeList: function(){
        return employeeDetails;
      }
    };
  });

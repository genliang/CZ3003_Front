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
    var Employee = function(name, contact, email){
      this.Name = name;
      this.Handphone = contact;
      this.Email = email;
    }
    Employee.prototype.save = function() {
      DataMgr.uploadEmployee();
    };
    // Public API here
    return {
      createEmployee: function (name,contact,email) {
        return new Employee(name,contact,email);
      }
    };
  });

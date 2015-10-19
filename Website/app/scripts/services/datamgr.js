'use strict';

/**
 * @ngdoc service
 * @name websiteApp.DataMgr
 * @description
 * # DataMgr
 * Factory in the websiteApp.
 */
angular.module('websiteApp')
  .factory('DataMgr', function ($q,$timeout) {
    // Service logic

    // Public API here
    return {
      //Schedule API
      getScheduleList: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
       var schedule_list = [{
          "id":1001,
          "title":"East branch",
          "desc":"",
          "date": new Date(17/10/15)
        },
        {
          "id":1002,
          "title":"West branch",
          "desc":"",
          "date": new Date(17/10/15)
        }];
        $timeout(function(){
          deferred.resolve(schedule_list);
        },500)
        return promise;
      },
      getSchedule: function (id) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var schedule = false;
        var schedule_list = [{
          "id":1001,
          "title":"East branch",
          "desc":"",
          "date": new Date(17/10/15)
        },
        {
          "id":1002,
          "title":"West branch",
          "desc":"",
          "date": new Date(17/10/15)
        }];
        for(i in schedule_list){
          if(schedule_list[i].id == id)
            schedule = schedule_list[i].id; 
        }
        $timeout(function(){
          deferred.resolve(schedule);
        },500)
        return promise;
      },
      //Employee API
      getEmployee: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
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
        $timeout(function(){
          deferred.resolve(employeeDetails);
        },500)
        return promise;
      },
      addEmployee: function (name,contact,email) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        $timeout(function(){
          console.log(name+ " is uploaded");
          deferred.resolve();
        },500)
        return promise;
      },
      removeEmployee: function (id) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        $timeout(function(){
          console.log("staff "+id+" deleted");
          deferred.resolve();
        },500)
        return promise;
      }
    };
  });

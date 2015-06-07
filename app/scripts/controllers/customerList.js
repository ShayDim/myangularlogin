'use strict';

/**
 * @ngdoc function
 * @name myangularloginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myangularloginApp
 */
angular.module('myangularloginApp')
  .controller('customerListCtrl', ['$scope', 'firebase',function ($scope, firebase) {
    $scope.customers = {};
    firebase.on("value", function(snapshot) {

      var names = new Array();
      var customersList = snapshot.val();
      if(customersList == null) {
        return;
      }
      customersList = customersList.customers;
      for (var key in customersList) {
        if (customersList.hasOwnProperty(key)) {
          var obj = customersList[key];
          for (var prop in obj) {
            if(obj.hasOwnProperty(prop)){
              names.push(prop);
            }
          }
        }
      }

      $scope.customers = names;
      $scope.$apply();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

  }]);

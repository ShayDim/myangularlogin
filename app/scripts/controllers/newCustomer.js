'use strict';

/**
 * @ngdoc function
 * @name myangularloginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myangularloginApp
 */
angular.module('myangularloginApp')
  .controller('newCustomerCtrl', ['$scope', 'firebase', function ($scope, firebase) {
    var customers = {customers: {}} ;

    firebase.on("value", function(snapshot) {

      var obj = snapshot.val();
      customers = obj;
      console.log(obj);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    $scope.addCustomer = function () {

      customers.customers[$scope._username] = $scope._password;
      firebase.set(
        customers
        , function(error, userData) {
        if (error) {
          alert("Error creating customer: ", error);
        } else {
          alert("Successfully created new customer account");
        }
      });
      $scope._username = '';
      $scope._password = '';
    };
  }]);

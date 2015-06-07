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


    $scope.addCustomer = function () {

      var customers = {customers: {}} ;
      firebase.on("value", function(snapshot) {

        customers = snapshot.val();

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

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

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

      var tmp = {};
      tmp[$scope._username] = $scope._password;
      firebase.child("customers").push(
        tmp
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

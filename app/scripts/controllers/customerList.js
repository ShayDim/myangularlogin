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

      var obj = snapshot.val();
      console.log(obj);

      $scope.customers = obj.customers;
      $scope.$apply();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

  }]);

'use strict';

/**
 * @ngdoc function
 * @name myangularloginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularloginApp
 */
angular.module('myangularloginApp')
  .controller('MainCtrl', ['$scope', '$location', 'firebase', function ($scope, $location, firebase){
    $scope.login = function () {

      var passwordInput = $scope._password;
      var usernameInput = $scope._username;
      var realPassword = "";

      firebase.on("value", function(snapshot){
        var obj = snapshot.val();
        if(obj == null) {
          return;
        }
        obj = obj.customers;
        for (var customer in obj) {
          if (customer === usernameInput) {
            realPassword = obj[customer];
          }
        }


      }, function (error) {
          if (error) {
            alert("The read failed: ", error);
          }

      });

      if(realPassword === passwordInput) {
        $location.path('/customerList');
      }
      else{
        alert("Wrong username or password!!!");
      }
      $scope._username = '';
      $scope._password = '';
    };
  }]);

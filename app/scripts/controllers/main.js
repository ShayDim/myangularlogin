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
      var realPassword;

      firebase.on("value", function(snapshot){
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
                if(prop === usernameInput) {
                  realPassword = obj[prop];
                }
              }
            }
          }
        }

        if(realPassword === passwordInput) {
          $location.path('/customerList');
        }
        else{
          alert("Wrong username or password!!!");
        }

      }, function (error) {
          if (error) {
            alert("The read failed: ", error);
          }

      });


      $scope._username = '';
      $scope._password = '';
    };
  }]);

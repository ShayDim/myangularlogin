'use strict';

/**
 * @ngdoc function
 * @name myangularloginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularloginApp
 */
angular.module('myangularloginApp')
  .controller('MainCtrl', ['$scope', 'firebase', function ($scope, firebase){
    $scope.login = function () {

      var passwordInput = $scope._password;
      var usernameInput = $scope._username;
      var realPassword = "";

      firebase.equalTo(usernameInput).on("child_added", function(snapshot) {
        realPassword = snapshot.val().password;
        alert('realPassword = ' + realPassword);
      }, function (error) {
          if (error) {
            alert("The read failed: ", error);
          }

      });


      if(realPassword == passwordInput)
      {
        $scope.changeView = function(){
          $location.path('views/customerList.html');
        }
      }
      else{
        alert("Wrong username or password!!!");
      }


      $scope._username = '';
      $scope._password = '';
    };
  }]);

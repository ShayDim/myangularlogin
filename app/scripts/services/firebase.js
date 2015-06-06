angular.module('myangularloginApp.firebase', [])
  .factory('firebase', function fireBase() {
    var myFirebaseRef = new Firebase("https://myangularlogin.firebaseio.com/");
    return myFirebaseRef;
  });

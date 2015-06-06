'use strict';

/**
 * @ngdoc overview
 * @name myangularloginApp
 * @description
 * # myangularloginApp
 *
 * Main module of the application.
 */
angular
  .module('myangularloginApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'myangularloginApp.firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/customerList', {
        templateUrl: 'views/customerList.html',
        controller: 'customerListCtrl'
      })
      .when('/newCustomer', {
        templateUrl: 'views/newCustomer.html',
        controller: 'newCustomerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

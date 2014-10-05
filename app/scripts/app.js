'use strict';

/**
 * @ngdoc overview
 * @name angularFreeApp
 * @description
 * # angularFreeApp
 *
 * Main module of the application.
 */
angular
  .module('angularFreeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main/index.html',
        controller: 'MainCtrl'
      })
      .when('/form1',{
        templateUrl: 'views/forms/form1.html',
        controller: 'Form1Ctrl'
      })
      .when('/form2',{
        templateUrl: 'views/forms/form2.html',
        controller: 'Form2Ctrl'
      })
      .when('/form3', {
        templateUrl: 'views/forms/form3.html',
        controller: 'Form3Ctrl'
      })
      .when('/tos', {
        templateUrl: 'views/forms/tos.html',
        controller: 'TosCtrl'
      })
      .when('/upgrades', {
        templateUrl: 'views/forms/upgrades.html',
        controller: 'UpgradesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

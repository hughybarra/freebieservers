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
        templateUrl: 'views/forms/form1.html'
      })
      .when('/form2',{
        templateUrl: 'views/forms/form2.html'
      })
      .when('/form3', {
        templateUrl: 'views/forms/form3.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

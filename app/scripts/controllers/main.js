'use strict';

/**
 * @ngdoc function
 * @name angularFreeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFreeApp
 */
angular.module('angularFreeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name angularFreeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFreeApp
 */
angular.module('angularFreeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

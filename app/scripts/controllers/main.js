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

		console.log('main controller running');

		var url = 'http://www.github.com';
		var dataType = 'json';
		var method = 'get';
		var data = {
			'a': 'aata', 
			'b': 'bata',
			'c': 'cata', 
			'd': 'data'

		};

	});

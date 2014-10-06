'use strict';

/**
 * @ngdoc function
 * @name angularFreeApp.controller:Form2Ctrl
 * @description
 * # Form2Ctrl
 * Controller of the angularFreeApp
 */
angular.module('angularFreeApp')
  .controller('Form2Ctrl', function ($scope) {

  	// declaring vars 
  	$scope.formOption = {};
  	$scope.formOption.value1 = false;
  	$scope.formOption.value2 = false;
  	$scope.formOption.value3 = false;
  	$scope.formOption.value4 = false;
  	$scope.formOption.value5 = false;

  	$scope.formOptionClick = function(option){
  		console.log('form option click');
  		console.log(option);

  		if (option == 1){
  			console.log('ran');
  			if ($scope.formOption.value1){
  				$scope.formOption.value1 = false;
  			}else{
  				$scope.formOption.value1 = true;
  			}
  		}
  		if (option == 2){
  			if ($scope.formOption.value2){
  				$scope.formOption.value2 = false;
  			}else{
  				$scope.formOption.value2 = true;
  			}
  		}
  		if (option == 3){
  			if ($scope.formOption.value3){
  				$scope.formOption.value3 = false;
  			}else{
  				$scope.formOption.value3 = true;
  			}
  		}
  		if (option == 4){
  			if ($scope.formOption.value4){
  				$scope.formOption.value4 = false;
  			}else{
  				$scope.formOption.value4 = true;
  			}
  		}
  		if (option == 5){
  			if ($scope.formOption.value5){
  				$scope.formOption.value5 = false;
  			}else{
  				$scope.formOption.value5 = true;
  			}
  		}

  		console.log($scope.formOption);
  	}; // end form option click fucntion


  });

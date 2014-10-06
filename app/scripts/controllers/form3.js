'use strict';

/**
 * @ngdoc function
 * @name angularFreeApp.controller:Form3Ctrl
 * @description
 * # Form3Ctrl
 * Controller of the angularFreeApp
 */
angular.module('angularFreeApp')
	.controller('Form3Ctrl', function ($scope) {

		// declaring variables 
		var valid 				= true;
		$scope.form 			= {};
		$scope.form.firstName 	= '';
		$scope.form.lastName 	= '';
		$scope.form.email 		= '';
		$scope.form.password 	= '';
		$scope.form.password1 	= '';
		$scope.form.coutnry 	= '';


		$scope.submitForm = function(){

			// very simple validation 

			// first name 
			if(!$scope.form.firstName){
				valid = false;
				// show validation 
				$('#formFirst').addClass('has-error');
				$('#formFirst').removeClass('has-success');
			}else{
				$('#formFirst').addClass('has-success');
				$('#formFirst').removeClass('has-error');

			}




			// last name 
			if(!$scope.form.lastName){
				valid = false;

				// show validation 
				$('#formLast').addClass('has-error');
				$('#formLast').removeClass('has-success');
			}else{
				$('#formLast').addClass('has-success');
				$('#formLast').removeClass('has-error');
			}

			// email 
			if (!$scope.form.email){
				valid = false;

				// show validation 
				$('#formEmail').addClass('has-rror');
				$('#formEmail').removeClass('has-success');
			}else{
				$('#formEmail').addClass('has-success');
				$('#formEmail').removeClass('has-error');
			}

			// password 
			if(!$scope.form.password){
				valid = false;
				// simple validation 
				$('#formPassword').addClass('has-error');
				$('#formPassword').removeClass('has-success');
			}else{

				$('#formPassword').addClass('has-success');
				$('#formpassword').removeClass('has-error');
			}

			// password 1
			if(!$scope.form.password1){
				valid = false;

				// simple validation 
				$('#formPassword1').addClass('has-error');
				$('#formPassword1').removeClass('has-success');
			}else{
				$('#formPassword1').removeClass('has-error');
				$('#formPassword1').addClass('has-success');
			}

			if(!$scope.form.country){
				valid = false;
			}

			// compare both passowrds 
			if($scope.form.password !== $scope.form.password1){
				valid = false;
				// validation passwords 
				$('#formPassword1').addClass('has-error');
				$('#formPassword1').removeClass('has-success');
				$('#formPassword').addClass('has-error');
				$('#formPassword').removeClass('has-success');

			}else{
				// validation passowrds 
				$('#formPassword1').removeClass('has-error');
				$('#formPassword1').addClass('has-success');
				$('#formPassword').addClass('has-success');
				$('#formpassword').removeClass('has-error');
			}

			// check if the form is valid 
			if(valid){
				// submit the form to the server

				var dataObject = {
					'firstName': $scope.form.firstName,
					'lastName': $scope.form.lastName,
					'email': $scope.form.email,
					'password': $scope.form.password
				};

				// ajax goes here 

				console.log('ajax data');
				console.log(dataObject);


			}else{
				console.log('form is not valid');
				// show error stuff on the page 
			}




		};// end submit form 


	});

'use strict';

// authenticationController controller
angular.module('myapp').controller('authenticationController', ['$scope','$http','$location','userDetailsService',function($scope,$http,$location,userDetailsService) {

	console.log('loading authenticationController');
	$(".mainnavs").hide();

	$scope.userDetails = {};
	$scope.userDetails.credetials = {};

	toastr.options = {
			'closeButton': true,
			'debug': false,
			'positionClass': 'toast-top-left',
			'onclick': null,
			'showDuration': '300',
			'hideDuration': '500',
			'timeOut': '5000',
			'extendedTimeOut': '1000',
			'showEasing': 'swing',
			'hideEasing': 'linear',
			'showMethod': 'fadeIn',
			'hideMethod': 'fadeOut'
		};

	$scope.signup = function() {
		console.log('Inside SignUp');
		$http.post('myapp/auth/signup', $scope.userDetails).success(function(response) {
			$scope.userDetails = response;
			toastr.success('User Profile created successfully');
			userDetailsService.useruserDetail = response;
			$location.path('/allQuestions');
		}).error(function(response) {
			toastr.error(response.message);
		});
	};

	$scope.login = function() {
		console.log('Inside Login');
		$http.post('myapp/auth/signin', $scope.userDetails.credetials).success(function(response) {
			$scope.userDetails = response;
			userDetailsService.useruserDetail = response;
			$(".mainnavs").show();
			$location.path('/allQuestions');
		}).error(function(response) {			
			toastr.error(response.message);
		});
	};


}]);
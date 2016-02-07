'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $log, $location) {
  
	// Register login function to scope
	$scope.login = function() {
		// Declare payload, request content
		var payload = {
			email: $scope.email,
			password: $scope.password
		};
		// POST
		$http.post('app/login', payload).success(function(data) {
			$log.debug(data);
			$location.path('/dashboard');
		});
	};
  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

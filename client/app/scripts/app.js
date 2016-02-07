'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
	  .when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	  })
	  .when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });

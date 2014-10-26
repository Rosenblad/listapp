'use strict';

/**
 * @ngdoc overview
 * @name listApp4
 * @description
 * # listapp4
 *
 * Main module of the application.
 */
angular
  .module('list4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listsView.html',
        controller: 'ListCtrl'
      })
      .when('/list/:listId', {
        templateUrl: 'views/listItemsView.html',
        controller: 'ListItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

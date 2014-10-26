'use strict';

/**
 * @ngdoc function
 * @name listappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listappApp
 */
angular.module('listappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

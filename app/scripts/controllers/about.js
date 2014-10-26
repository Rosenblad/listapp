'use strict';

/**
 * @ngdoc function
 * @name listappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the listappApp
 */
angular.module('listappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

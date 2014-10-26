'use strict';

angular.module('list4App')
	.controller('ListItemCtrl', ['$scope', '$routeParams', '$firebase', '$window', function($scope, $routeParams, $firebase, $window) {
		var listUrl = $routeParams.listId;
    var ref = new $window.Firebase('https://list-app-rosen.firebaseio.com/listitems').child(listUrl);
    var sync = $firebase(ref);
	  $scope.listItems = sync.$asArray();

		$scope.saveListItem = function(listItemName) {
			sync.$push({name: listItemName, done: 'false'});
			// Clear the text input
			$scope.newListItem = '';
		};

		$scope.removeListItem = function(listItem) {
			sync.$remove(listItem);
		};

	}]);
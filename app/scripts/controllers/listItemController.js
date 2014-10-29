'use strict';

angular.module('list4App')
	.controller('ListItemCtrl', ['$scope', '$routeParams', '$firebase', '$window', function($scope, $routeParams, $firebase, $window) {
		// TBD: Evaluate if it's better to create a 'join' for the list and its listitems.
		var listUrl = $routeParams.listId;

    var listRef = new $window.Firebase('https://list-app-rosen.firebaseio.com/lists').child(listUrl);

    listRef.on('value', function(snapshot) {
    	$scope.listName = snapshot.val().name;
    	$scope.listType = snapshot.val().type;

    	if ($scope.listType === 'checklist') {
	    	$scope.checkboxes = true;
	    } else {
	    	$scope.checkboxes = false;
	    }
    });


    var listItemsRef = new $window.Firebase('https://list-app-rosen.firebaseio.com/listitems').child(listUrl);
    var sync = $firebase(listItemsRef);

	  $scope.listItems = sync.$asArray();


		$scope.saveListItem = function(listItemName) {
			sync.$push({name: listItemName, done: 'false'});
			// Clear the text input
			$scope.newListItem = '';
		};

		$scope.removeListItem = function(listItem) {
			sync.$remove(listItem);
		};

		// Toggles checked
		$scope.clickCheckbox = function(listItem) {
			var refDone = listItemsRef.child(listItem).child('done');

			refDone.once('value', function(snapshot) {
  			if (snapshot.val() === 'true') {
  				refDone.set('false');
  			} else {
  				refDone.set('true');
  			}
			});
		};

		$scope.changeListType = function(listType) {
			listRef.child('type').set(listType);
		};

	}]);
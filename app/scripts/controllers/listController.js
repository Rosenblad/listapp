'use strict';

angular.module('list4App')
	.controller('ListCtrl', ['$scope', '$window', '$firebase', function($scope, $window, $firebase) {
    var ref = new $window.Firebase('https://list-app-rosen.firebaseio.com/lists');
    var sync = $firebase(ref);

    $scope.lists = sync.$asArray();
		
		$scope.saveList = function(listName) {
			if (!listName) {
				return;
			}

			// TBD: Make url safe
			var listUrl = listName.replace(/ /g,'-');
			
	    sync.$set(listUrl, {name: listName, type: 'default'}).then(function(newChildRef) {
	    	$scope.newListName = ''; // Redundant when redirecting
	  		console.log('added record with id ' + newChildRef.name());
			});
		
			$window.location.href = '/#/list/' + listUrl;
		};

		$scope.inputHandler = function(event) {
			console.log(event);
			console.log('inputHandler');
		};

		$scope.removeList = function(listId) {
			var ref2 = new $window.Firebase('https://list-app-rosen.firebaseio.com/listitems');
			var sync2 = $firebase(ref2);

			sync.$remove(listId);
			sync2.$remove(listId);
		};

		}]);
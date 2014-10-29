/** 
 * Directive that places focus on the element it is applied to
 */
angular.module('list4App')
	.directive('raFocus', function raFocus() {
		'use strict';

		return function (scope, elem) {
			elem.focus();
		};
	});
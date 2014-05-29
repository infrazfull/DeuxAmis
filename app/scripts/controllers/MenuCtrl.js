'use strict';

angular.module('deuxamisApp').controller('MenuCtrl', ['$scope', '$http', '$location', '$translate', function ($scope, $http, $location, $translate) {

	$scope.getClass = function(path) {
	    if (path === $location.path()) {
	      return 'active';
		} else {
	  		return '';
		}
	}

}]);
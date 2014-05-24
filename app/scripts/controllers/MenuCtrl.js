'use strict';

angular.module('deuxamisApp').controller('MenuCtrl', function ($scope, $http, $location, appDatasModel) {

	$scope.appDatas = appDatasModel;

	$scope.getClass = function(path) {
	    if (path.substring(1) === $location.path()) {
	      return 'active';
		} else {
	  		return '';
		}
	}

});
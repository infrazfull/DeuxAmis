'use strict';

angular.module('deuxamisApp').controller('LangCtrl', ['$scope', '$http', '$location', '$translate', function ($scope, $http, $location, $translate) {
	$translate('NAVBAR.HOME_LINK').then(function (translation) {
    	console.log(translation);
    });
	$scope.getClass = function(lang) {
		if(lang === $translate.use()) {
			return 'active';
		}
		return '';
	};

	$scope.changeLanguage = function (key) {
		$translate.use(key);
	};

}]);
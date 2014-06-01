'use strict';

angular.module('deuxamisApp').factory('suggestionsFactory', ['$http','$q', function($http, $q) {
	var factory = {
		suggestions: false,
		getSuggestions: function() {
			var deffered = $q.defer();
			console.log("deffered");
			if(factory.suggestions === false) {
				console.log("getHttp");
				$http({method: 'GET', url: '/datas/suggestions.json'}).
				success(function(data, status, headers, config) {
			    	factory.suggestions = data.suggestions;
					deffered.resolve(data.suggestions);
			    }).
			    error(function(data, status, headers, config) {
					deffered.reject('Impossible de récupérer les suggestions');
			    });
			} else {
				console.log("else");
				deffered.resolve(factory.suggestions);
			}

			return deffered.promise;
		}
	};
	return factory;
}]);

angular.module('deuxamisApp').controller('SuggestionsCtrl', ['$scope', '$http', '$location', '$translate','suggestionsFactory', function ($scope, $http, $location, $translate, suggestionsFactory) {
	suggestionsFactory.getSuggestions().then(function(suggestions) {
		var index = 0;
		suggestions.forEach(function(suggestion) {
			suggestion.index = index;
			index = index + 1;
		});
		$scope.suggestions = suggestions;
	});

	$scope.defaultIndex = 0;

	$scope.changeIndex = function(suggestion) {
		$scope.defaultIndex = suggestion.index;
	};

	$scope.isSelected = function(suggestion) {
		return $scope.defaultIndex === suggestion.index;
	};

	$scope.getLabel = function(suggestion) {
		if($translate.use() == 'fr') {
			return suggestion.titleFr;
		}
		if($translate.use() == 'en') {
			return suggestion.titleEn;
		}
		if($translate.use() == 'de') {
			return suggestion.titleDe;
		}
	};

}]);
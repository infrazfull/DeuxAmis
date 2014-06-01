'use strict';

angular.module('deuxamisApp').factory('creationsFactory', ['$http','$q', function($http, $q) {
	var factory = {
		creations: false,
		getCreations: function() {
			var deffered = $q.defer();
			console.log("deffered");
			if(factory.creations === false) {
				console.log("getHttp");
				$http({method: 'GET', url: '/datas/creations.json'}).
				success(function(data, status, headers, config) {
			    	factory.creations = data.creations;
					deffered.resolve(data.creations);
			    }).
			    error(function(data, status, headers, config) {
					deffered.reject('Impossible de récupérer les creations');
			    });
			} else {
				console.log("else");
				deffered.resolve(factory.creations);
			}

			return deffered.promise;
		}
	};
	return factory;
}]);

angular.module('deuxamisApp').controller('CreationsCtrl', ['$scope', '$http', '$location', '$translate','creationsFactory', function ($scope, $http, $location, $translate, creationsFactory) {

	$scope.creationsSelected = false;

	creationsFactory.getCreations().then(function(creations) {
		$scope.creations = creations;
		$scope.creationsSelected = $scope.creations[0];
	});

	$scope.isSelected = function(creation) {
		return $scope.creationsSelected === creation;
	}

	$scope.getLabel = function(creations) {
		if($translate.use() == 'fr') {
			return creations.titleFr;
		}
		if($translate.use() == 'en') {
			return creations.titleEn;
		}
		if($translate.use() == 'de') {
			return creations.titleDe;
		}
	};

	$scope.selectCreation = function(creation) {
		$scope.creationsSelected = creation;
	};

	$scope.getSelectedTitle = function() {
		if($scope.creationsSelected === false) {
			return "";
		} else {
			return $scope.getLabel($scope.creationsSelected);
		}
	};

	$scope.getSelectedImage = function() {
		if($scope.creationsSelected === false) {
			return "";
		} else {
			return $scope.creationsSelected.imageUrl;
		}
	};

}]);
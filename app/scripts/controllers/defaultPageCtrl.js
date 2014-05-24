'use strict';

app.controller('defaultPageCtrl', function($scope, $http, $location, $anchorScroll) {
	 $scope.goTop = function (){
		// set the location.hash to the id of
		// the element you wish to scroll to.
		$location.hash('top');
		 
		// call $anchorScroll()
		$anchorScroll();
	};	

});
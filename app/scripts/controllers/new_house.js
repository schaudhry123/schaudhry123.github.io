'use strict';

angular.module('frontendApp')

.controller('newHouseCtrl', function($http, $rootScope, $scope) {
	$scope.createHouse = function() {
		$http
			.post($rootScope.serverHost + 'houses/newHouse/', $scope.house)
			.then(function() {
				$rootScope.showSimpleToast('House created!');
				$rootScope.goToState('houses');
			});
	};
});

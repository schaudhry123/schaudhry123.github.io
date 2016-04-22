'use strict';

angular.module('frontendApp')

.controller('roommatesCtrl', function($http, $rootScope, $scope) {
	$scope.loading = true;

	$http
		.get($rootScope.serverHost + 'users/getCompatibleRoommates/' + $rootScope.user.id + '/')
		.then(function(response) {
		$scope.roommates = response.data;
		$scope.loading = false;
	});

	$scope.match = function(id) {
		$http
			.get($rootScope.serverHost + 'users/getAvgUser/' + $rootScope.user.id + '/' + id +'/')
			.then(function(response) {
				$rootScope.match = response.data;
				$rootScope.goToState('houses');
			});
	};
});

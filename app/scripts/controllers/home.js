'use strict';

angular.module('ultimateTeam.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http',
	function($scope, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'players/').success(function(data) {
			$scope.players = data;
		});

	}]);